//Goal: Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently.
//https://data.nasa.gov/resource/gvk9-iz74.json

document.querySelector('button').addEventListener('click', getFacility)

function getFacility(){
    const city = document.querySelector('input').value
    fetch(`https://api.weatherapi.com/v1/current.json?key=12ca6514d9ef4f2b9d180411221710&q=${city}&aqi=no`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
        document.querySelector('h4').innerText = data.current.temp_f+"°F"
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    
    const unicorn = document.querySelector('input').value
    fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0])
        document.querySelector('h2').innerText = data[0].center
        document.querySelector('h3').innerText = data[0].city
        document.querySelector('h4').innerText = data[0].facilityWeather
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


