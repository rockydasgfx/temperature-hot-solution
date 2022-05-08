const API_KEY = "74866dccaf2d9665f0ab05a3d59cb52b";

document.getElementById("search-btn").addEventListener("click", () => {
  const searchCity = document.getElementById("input-text").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data));
});

const getElement = (id, text) => {
  document.getElementById(id).innerHTML = text;
};

const showData = (data) => {
  getElement("cityName", data.name);
  getElement("temp", data.main.temp);
  getElement("sky", data.weather[0].main);

  const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(url);
  const icon = document.getElementById("icon");
  icon.setAttribute("src", url);
};
