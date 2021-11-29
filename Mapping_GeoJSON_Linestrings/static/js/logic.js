// to add GeoJSON LineStrings
// 1.  Add console.log to check to see if our code is working.
console.log("working");

// 2. add tile layer 

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 3. We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 4. Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
  };

// 5. Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
})

// 6. Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// 7. Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/div1085/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// 8. Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data. add popup to airports
  L.geoJSON(data,{
    onEachFeature: function(feature, layer) {
                console.log(feature);
              layer.bindPopup("<h2>"+'Airport Code: '+feature.properties.faa+"</h2><hr><p>"+'Airport Name: '+feature.properties.name+"</p>");
             }
  }).addTo(map);
});