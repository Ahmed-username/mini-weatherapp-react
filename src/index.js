import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const config = {
  api: {
    weather: {
      apiKey: "98c20025c94e54346cce38d0c653d966",
      city: "London",
      url: "https://api.openweathermap.org/data/2.5/weather"
    },
    unsplash: {
      apiKey: "f3dc3b6bb3462a90c7969a62d83c8e3dd552b928cc31041850388e8616e977a6",
      url: "https://api.unsplash.com/search/photos"
    }
  }
};

ReactDOM.render(<App config={config} />, document.getElementById("⚛️"));
