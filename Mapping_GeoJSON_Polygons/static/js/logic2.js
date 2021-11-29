// to add GeoJSON LineStrings
// 1.  Add console.log to check to see if our code is working.
console.log("working");

// 2. add tile layer 

let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 3. We create the dark view tile layer that will be an option for our map.
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 4. Create a base layer that holds both maps.
let baseMaps = {
    "Day Navigation": day,
    "Night Navigation": night
  };

// 5. Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [day]
})

// 6. Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// 7. Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/div1085/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// 8. Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data. add a popup marker that shows the airline code and destination.
  L.geoJSON(data, {
      style:myStyle,
      onEachFeature: function(feature, layer) {
                console.log(feature);
              layer.bindPopup("<h3>"+'Airline: '+feature.properties.airline+"</h3><hr><h3>"+'Destination: '+feature.properties.dst+"</h3>");
             }
  }).addTo(map);
});