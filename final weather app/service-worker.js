const CACHE_NAME = "weather-app-cache-v1";
const urlsToCache = [
  "/",
  "./index.html",
  "./index2.php",
  "https://fonts.gstatic.com",
  "./service-worker.js",
  "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
  "./script.js",
  "./openweathermap.org/img/wn/${data.weather[0].icon}.png",
  "https://api.openweathermap.org/data/2.5/weather?q=Sunderland&units=metric&appid=bcd423b155cb9296bd1ea22cf8e4f79f",
  "./openweathermap.org/img/wn/04n.png",
  "http://www.w3.org/2000/svg",
  "https://source.unsplash.com/1600x900/?",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Failed to add resources to cache', error);
      })
  );
});
self.addEventListener("fetch", (event) => {
  console.log(`Fetching: ${event.request.url}`);
  
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log(`Returning cached response for: ${event.request.url}`);
        return response;
      }

      console.log(`Cache miss. Fetching from network: ${event.request.url}`);
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          console.log(`Unable to fetch: ${event.request.url}`);
          return response;
        }

        console.log(`Caching response for: ${event.request.url}`);
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});