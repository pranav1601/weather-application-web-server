# Weather-Application

The application can be accessed on the web over [here weather-search-application.herokuapp.com](https://weather-search-application.herokuapp.com/)<br/>
A nodejs backend run application that can be used to view weather data of a location via webpage. The application uses express for providing the server. The application uses handlebars for developing the web pages. It is hosted on heroku.<br/>
The application is the web version of [command line weather application](https://github.com/pranav1601/weather-application).
* The application uses [Mapbox](www.mapbox.com) for fetching the latitude and longitude of a location from the name of the location.
* The application uses [WeatherStack](www.weatherstack.com) for fetching the weather data of a location from the latitude and longitude of the location.

The project uses npm version 7.6.0 and Node.js v12.20.2.

Instructions to run and use the application are given below:

## Application Setup

* Start terminal(Mac/Linux) or command window(Windows). Ensure you have git, node and npm installed.
* Run command `https://github.com/pranav1601/weather-application.git`
* Run command `cd weather-application`
* install the dependencies-> Run command -> `npm install`

## How to use the application?
### Access the website
* run command -> `node src/app.js`
* Open your browser and the application will be up and running on localhost:3000

