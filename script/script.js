let key = "3b0cdb6ea1f647537674f998d78d8b06"

function Update(server) {
    document.querySelector('.city').innerHTML = `Tempo em ${server.name}`;
    document.querySelector('.Temp').innerHTML = `${Math.floor(server.main.temp)}ºC`;
    document.querySelector('.prevision').innerHTML = server.weather[0].description;
    document.querySelector(".humity").innerHTML = `Umidade ${server.main.humidity}%`;
    document.querySelector('.Icon').src = `https://openweathermap.org/img/wn/${server.weather[0].icon}.png`
}

async function SearchCity(cidade) {
    const server = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(response => response.json());

    setTimeout(() => {
        Update(server);
        document.querySelector('.circle').style.display = "none";
        document.querySelector('.loading').style.display = "none";
    }, 1800)
}

function Search() {
    document.querySelector('.circle').style.display = "block";
    document.querySelector('.loading').style.display = "block";
    let cidade = document.querySelector(".CityInput").value;
    document.querySelector('.CityInput').value = "";
    setInterval(SearchCity(cidade), 2000);

}