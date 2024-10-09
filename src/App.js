import "./App.css";
import { useState } from "react";

const api = {
  key: "c689c235f5f85f4d5340ee2b141a039d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  //Once Search Button is press it will make a fetch and search for the correct data

  
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };



  return (
    <div className="App">
      <header className="App-header">
         {/*Heading*/}
        <h1>JP's Weather App🌤️</h1>

        {/*Search Box and Button also activated search when pressed enter*/}
        <div>
        <input
        type="text"placeholder="Enter city/town/state"
        onChange={(e) => setSearch(e.target.value)}onKeyPress={(e) => {
      if (e.key === 'Enter') {
        searchPressed();
      }
    }}
  />
  <button onClick={searchPressed}>Search</button>
</div>

        

        {/*If weather is not undefined display results from API*/}
        {typeof weather.main !== "undefined" ? (
          <div>
             {/*Location*/}
            <p>{weather.name}</p>

              {/*Temperature*/}
            <p>{weather.main.temp}°C</p>

               {/*Condition*/}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
