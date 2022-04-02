// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];
  
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: '4',  
    dashArray: '5, 5', 
    dashOffset: '0',
    opacity: '0.5'
  }).addTo(map);
//custom stuff
// L.circle([34.0522, -118.2437], {
//     fillColor: 'yellow',
//     weight: 2,
//     fillOpacity: 0.3,
//     color: 'black',
//     radius: 300 }).addTo(map);
// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);