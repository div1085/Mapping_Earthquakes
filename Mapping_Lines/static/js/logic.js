// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Adding mutliple markers to the map lat/lon nested in array for the multiple markers
// get city data from cities js file 
let cityData=cities

// add circle to map
// let circle= L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);

// Add circlemarlker to map 
// let circle= L.circleMarker([34.0522, -118.2437],{
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 300
// }).addTo(map);

// Loop through the cities array and create one marker for each city.

 // add each city's location to the map by adding the location to the marker() function.
//  let markers= cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// Bind a Popup to the Marker
// let markers= cityData.forEach(function(city) {
//         console.log(city)
//         L.marker(city.location).
//         bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//             .addTo(map);
//     });

// change the marker for each city to a circle that has a radius equivalent to the city's population

let markers= cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    }).
    bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
        .addTo(map);
});



// add tile layer 

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// then we add our 'graymap' tile layer to the map
streets.addTo(map);

