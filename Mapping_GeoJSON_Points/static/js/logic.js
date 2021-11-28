// 1.  Add console.log to check to see if our code is working.
console.log("working");

// 2. Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 4);

// 2.1 Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 10);

// 2.2 Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];
// 2.3 Create a polyline using the line coordinates and make the line red.
// let lineRed= L.polyline(line, {
//             color: "red"
//             }).addTo(map);

// 2.4 adding multiple lines to the map 
    // Coordinates for each point to be used in the polyline.
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
// ];
// 2.5 Create a polyline using the line coordinates and make the line dashed blue color 
// L.polyline(line, {
//     color: "blue",
//     weight: 10,
//     opacity: .7,
//     dashArray: '20,15'
//  }).addTo(map);

// 3. Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// 3.1 Adding mutliple markers to the map lat/lon nested in array for the multiple markers
// 3.1.1 get city data from cities js file 
// let cityData=cities

// 3.2 add circle to map
// let circle= L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);

//3.3  Add circlemarlker to map 
// let circle= L.circleMarker([34.0522, -118.2437],{
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 300
// }).addTo(map);

// 4. Loop through the cities array and create one marker for each city.

 // 4.1 add each city's location to the map by adding the location to the marker() function.
//  let markers= cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// 4.2 Bind a Popup to the Marker
// let markers= cityData.forEach(function(city) {
//         console.log(city)
//         L.marker(city.location).
//         bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//             .addTo(map);
//     });

// 4.3 change the marker for each city to a circle that has a radius equivalent to the city's population

// let markers= cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     }).
//     bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//         .addTo(map);
// });


// 5. Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// 6.1  Grabbing our GeoJSON data.
// let jsData= L.geoJSON(sanFranAirport).addTo(map);

// 6.2 Grabbing our GeoJSON data point to layer
// let jsData= L.geoJson(sanFranAirport, {
//     // // We turn each feature into a marker on the map. adding popup marker with bindPopup()
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//       return L.marker(latlng).bindPopup("<h2>"+feature.properties.name+"</h2><hr><p>"+feature.properties.country+"</p>" );
//      }
// }).addTo(map);

// 6.3 onEachFeature Function: Grabbing our GeoJSON data
let jsData= L.geoJson(sanFranAirport, {
    // // We turn each feature into a marker on the map. adding popup marker with bindPopup()
    onEachFeature: function(feature, layer) {
        console.log(feature);
      layer.bindPopup("<h2>"+'Airport Code: '+feature.properties.faa+"</h2><hr><p>"+'Airport Name: '+feature.properties.name+"</p>");
     }
}).addTo(map);

// add tile layer 

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// then we add our 'graymap' tile layer to the map
streets.addTo(map);

