
function showData() {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    const key = '04ba59dcbe904f0c35999f5f9e5201b0';
    if (input) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=${key}`)
            .then(res => res.json())
            .then(data => {
                if (data.main) {

                    output.style.visibility="visible";


                    output.innerHTML = `
                        <div class="temp">
                            <span id="temp">${data.main.temp} °C</span>
                            <p class="desc">${data.weather[0].description} </p>
                        </div>
                        <div class="details-container">
                            <div class="details">
                                <span id="temp_min">Min : ${data.main.temp_min} °C</span>
                                <span id="temp_max">Max : ${data.main.temp_max} °C</span>
                            </div>
                            <div class="details">
                                <span id="humidity">Humidity : ${data.main.humidity} %</span>
                                <span id="wind">Wind : ${data.wind.speed} km/hr</span>
                            </div>
                        </div>`;

                } else {
                    output.style.visibility="hidden";
                    alert("City Data not found")
                }
            });

    }
    else {
        alert('Please Enter City')
    }
}