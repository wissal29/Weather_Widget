function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callBack);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function callBack(position) {
  
      // get longitude and latitude values
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
   
    var request = new XMLHttpRequest()
    request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long, true);
    request.onload = function () {
      // Begin accessing JSON data here
      var weather = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
        document.getElementsByClassName('city-name')[0].innerHTML = weather.name;
        document.getElementsByClassName('temp-current')[0].innerHTML = Math.round(weather.main.temp) + '&deg';
        if (weather.weather[0].icon) document.getElementsByClassName('ico-current')[0].style.backgroundImage = "url('" + weather.weather[0].icon + "')";
        document.getElementsByClassName('description')[0].innerHTML = weather.weather[0].description
        document.getElementsByClassName('wind')[0].innerHTML = weather.wind.speed + ' km/h';
      } else {
        alert('error')
      }
    }
    request.send();
  }
  this.getLocation();