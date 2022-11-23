//Goal: Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently.
//https://data.nasa.gov/resource/gvk9-iz74.json

document.querySelector('button').addEventListener('click', getRandomFacility)

function getRandomFacility(){

  // let city = document.querySelector('input').value
  // let latitude = 0.0;
  // let longitude = 0.0;

  // fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Latitude: ' + data.results[0].latitude)
  //   console.log('Longitude: ' + data.results[0].longitude)

  //   latitude = data.results[0].latitude
  //   longitude = data.results[0].longitude

  //   document.querySelector('#facLocation').innerText = 'Latitude: ' + data.results[0].latitude + ' Longitude: ' + data.results[0].longitude

  //   console.log(latitude)
  //   console.log(longitude)

  // })
  // .catch(error => {
  //   console.log(`error ${error}`)
  // })
    
  fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`)
  .then(response => response.json())
    .then(data => {
      let randomIndex = Math.round(Math.random() * data.length) - 1
      let latitude = 0.0
      let longitude = 0.0
    
      console.log(data[randomIndex])
      console.log(data[randomIndex].location.latitude)
      console.log(data[randomIndex].location.longitude)
      console.log(data[randomIndex].center)

      latitude = data[randomIndex].location.latitude
      longitude = data[randomIndex].location.longitude
      document.querySelector('#facName').innerText = data[randomIndex].facility + ' at ' + data[randomIndex].center
      document.querySelector('#facAddress').innerText = data[randomIndex].city + ', ' + data[randomIndex].state + ' ' + data[randomIndex].zipcode
      document.querySelector('#facCoordinates').innerText = ' Latitude: ' + latitude + ' Longitude: ' + longitude


    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(response => response.json())
    .then(data => {
      let tempF = (data.current_weather.temperature * 1.8 + 32).toFixed(2)

      console.log(tempF)
      document.querySelector('#facWeather').innerText = tempF + ' °F'
    })
    .catch(error => {
      console.log(`error ${error}`)
    })

  })
  .catch(error => {
    console.log(`error ${error}`)
  })
}