let weather ={
    apikey:"bcd423b155cb9296bd1ea22cf8e4f79f",
    fetchWeather: function (city){
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`
      ) 
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { "1h": rain1h, "3h": rain3h } = data.rain || {}; 
    const rainfall = rain1h ? rain1h + " mm (1h)" : rain3h ? rain3h + " mm (3h)" : "N/A";
    const today = new Date();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][today.getDay()];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][today.getMonth()];
    const date = today.getDate();
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".rainfall").innerText = "Rainfall: " + rainfall;
    document.querySelector(".day").innerText = dayOfWeek;
    document.querySelector(".date").innerText = `${month} ${date}`;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  

weather.fetchWeather("Sunderland");
