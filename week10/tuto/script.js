fetch(`http://www.omdbapi.com/?apikey=b4cdfba7&t=Pathaan`)
        .then((response) => response.json())
        .then((data) => {
            const database = JSON.stringify(data);
            localStorage.setItem("database", database);
    const resultDiv = document.querySelector("#result");
            resultDiv.innerHTML = `
        <h2>Movie Title: ${data.Title}</h2> 
        <p>Rating: ${data.imdbRating}</p>
        <p>Actors: ${data.Actors}</p>
        <p>Released Date: ${data.Released}</p>
      `;
        })
        .catch((error) => console.error(error));
const database = localStorage.getItem("database");
const data = JSON.parse(database);
if (data) {
    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = `
   <h2>Movie Title: ${data.Title}</h2> 
    <p>Rating: ${data.imdbRating}</p>
    <p>Actors: ${data.Actors}</p>
    <p>Released Date: ${data.Released}</p>
  `;
}