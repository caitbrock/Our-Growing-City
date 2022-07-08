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
        color: "#424748",
        fillColor: "rgb(223, 226, 23)",
        fillOpacity: "0.7",
    }
).addTo(map);
let southEglintonDavisville = L.polygon([
	[43.6978313, -79.3863511],[43.6981746, -79.3864788],[-79.3865304,43.6983276],[-79.3867442,43.6993],[-79.3868343,43.6998356],[-79.3869733,43.7003128],[-79.3870311,43.7005064],[-79.387495,43.7016455],[-79.3878316,43.7024694],[-79.3881569,43.7032933],[-79.3885711,43.7042928],[-79.388934,43.7051797],[-79.3892925,43.7060847],[-79.3901972,43.7084078],[-79.3915009,43.7081345],[-79.3928194,43.7078612],[-79.3941335,43.7076013],[-79.3954927,43.707328],[-79.3968293,43.7070592],[-79.3974367,43.7069299],[-79.3974743,43.7069219],[-79.3983665,43.706732],[-79.3982397,43.7061444],[-79.3978525,43.7043508],[-79.3978257,43.7041483],[-79.3976842,43.7033966],[-79.3976658,43.7032931],[-79.3975054,43.7025121],[-79.3973442,43.7017942],[-79.3972192,43.701137],[-79.3971592,43.7008534],[-79.3970392,43.7002953],[-79.3969539,43.6997867],[-79.3968612,43.699332],[-79.3966427,43.6983012],[-79.396471,43.6973739],[-79.3962045,43.696127],[-79.3961082,43.6956666],[-79.3958853,43.6956854],[-79.3957163,43.6957001],[-79.395569,43.6957224],[-79.3954613,43.6957425],[-79.3952834,43.69578],[-79.3951285,43.6958147],[-79.3950211,43.6958404],[-79.392755,43.6962825],[-79.3895282,43.6969912],[-79.3876456,43.6973978],[-79.387011,43.6974685],[-79.3866606,43.6975011],[-79.3864563,43.6975193],[-79.3863881,43.6975077],[-79.3862292,43.6975037],[-79.3863511,43.6978313]]
)

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


var map2 = L.map('map').setView([43.715854, -79.390832], 19);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
var Stamen_TonerBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map2);