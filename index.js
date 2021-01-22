function callweather() {
    //e.preventDefault()
    var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
             // Typical action to be performed when the document is ready:
             //console.log(document.getElementById('city').value);
             //console.log(xhttp.responseText);
             var theResponse = JSON.parse(xhttp.responseText);
             var temp = theResponse.name + "'s temp is " + theResponse.main.temp;
             console.log(temp);
             document.getElementById("weather").innerHTML = temp;
             //alert(JSON.stringify(xhttp.responseText));
         }
     };
     var city = document.getElementById("city").value;
     var appid = "fbc072eb5267056880761b29b86ad73e"
     var website = "https://api.openweathermap.org/data/2.5/weather";
     console.log(city);
     //weatherURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=fbc072eb5267056880761b29b86ad73e";
     weatherURL = website + "?q=" + city + "&units=metric" + "&appid=" + appid;
     //xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Markham&units=metric&appid=fbc072eb5267056880761b29b86ad73e", true);
     xhttp.open("GET", weatherURL, true);
     xhttp.send();

     //console("responsecode=",responsecode);
     //alert(JSON.stringify(response));
 }
