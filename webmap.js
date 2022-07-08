// Import the leaflet package
var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([43.69653, -79.28526], 11);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
var Stamen_TonerBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

let northYork = L.polygon([
	[43.7069299169967, -79.397436655145896], 
	[43.706731990464903, -79.398366500003704], 
	[43.707985469433098, -79.398627837559602], 
	[43.708209726868702, -79.398678383941004], 
	[43.709087726575, -79.398869214079113],
	[43.709583350714702, -79.398997431692905], 
	[43.7109123111778, -79.399288226528398], 
	[43.711076645319899, -79.399316665898795],
	[43.711838968108097, -79.399476585359807], 
	[43.712288351294703, -79.399563195735894], 
	[43.712330531900498, -79.39936952763], 
	[43.712407806178597, -79.398949429474001], 
	[43.712471890307107, -79.398588209994301], 
	[43.712618295656497, -79.397870205127901], 
	[43.713108598804602, -79.395514700062293],
	[43.713601427623402, -79.393120570738901], 
	[43.713785818539797, -79.392200479870695], 
	[43.712606057264203, -79.391779261369607], 
	[43.7117116928912, -79.391457661102194], 
	[43.711128749685997, -79.391226887028395],
	[43.709615552908097, -79.390657679446704], 
	[43.708407753410803, -79.390197174421402], 
	[43.708134459647901, -79.391500907509297], 
	[43.707861155811699, -79.392819369934401], 
	[43.707601325659397, -79.394133515790301], 
	[43.7073280196242, -79.395492653727999], 
	[43.707059177740199, -79.396829287959207], 
	[43.7069299169967, -79.397436655145896]],
    {
        color: rgb(223, 226, 23),
        fillColor: rgb(223, 226, 23),
        fillOpacity: "0.5",
    }
).addTo(map);

// Adds a popup marker to the webmap for GGL address
// L.circleMarker([43.659752, -79.378161]).addTo(map)
// 	.bindPopup(
// 		'MON 304<br>' + 
// 		'Monetary Times Building<br>' +
// 		'341 Victoria Street<br>' + 
// 		'Toronto, Ontario, Canada<br>' +
// 		'M5B 2K3<br><br>' + 
// 		'Tel: 416-9795000 Ext. 5192'
// 	)
	// .openPopup();