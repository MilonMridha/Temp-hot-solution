const apiKey = `87cfe1f2985a6e52d82edbf6f83d27d5`;

const loadTemp = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemp = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("celcious", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);
  //set weather condition icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("icon");
  imgIcon.setAttribute("src", url);
};
