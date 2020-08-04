//define basemap layers
var terrain_layer = new L.StamenTileLayer("terrain");
var toner_layer = new L.StamenTileLayer("toner");
//set map with parameters
var map = new L.Map("map", {
	center: new L.LatLng(37.8, -96),
	zoom: 4
});
//add start-up basemap layer to map
map.addLayer(terrain_layer);
var gj_features = L.geoJson(gj_scribble);
//add GeoJSON to the map
map.addLayer(gj_features);
//create states layer
var states = L.geoJson(
	statesData, {
		style: styler,
		onEachFeature: binder
});	
//add states to the map
map.addLayer(states);
//create function to color the statesData
function getColor(d) {
	return d > 1000 ? '#0c2c84' :
		   d > 500  ? '#225ea8' :
		   d > 200  ? '#1d91c0' :
		   d > 100  ? '#41b6c4' :
		   d > 50   ? '#7fcdbb' :
		   d > 20   ? '#c7e9b4' :
		   d > 10   ? '#edf8b1' :
					  '#ffffd9';
}
//create styling function to be used as fillcolor option value
function styler(feature) {
	return {
		fillColor: getColor(feature.properties.density),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7
	};
}
//create popup binding function to be used on the onEachFeature property. 
		function binder (feature, layer) {
         	layer.bindPopup("<div id='states-popup'> The Density of <br> " + 
			feature.properties.name + 
			" is: <br>" +
			feature.properties.density) + 
			"</div>";
}
//add trees to the map
var trees = L.esri.featureLayer({
	url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0',
	pointToLayer:function (geojson, latlng) {
		
		var att = geojson.properties; //capture attributes
		
		return L.marker(latlng, {
			icon: L.icon({
				iconUrl: 'images/small-tree-icon-7702.png',
				iconRetinaUrl: 'images/small-tree-icon-7702.png',
				iconSize: [31, 27],
				iconAnchor: [13.5, 17.5],
				popupAnchor: [0, -11]
		}),
			}).bindPopup("<p>The Scientific Name of this Heritage Tree is: <p><strong>" +
				att.SCIENTIFIC + "</strong>"); //bind the popup
	},
});
map.addLayer(trees);
//add portland point using turf.js
var coordinates = [-122.6, 45.5];
var properties = {
	name: 'Portland'
};
var pdx_point = turf.point(coordinates, properties);
var units = { units: 'miles' };
var pdx50 = turf.buffer(pdx_point, 50, units);
var pdx_buffer = L.geoJSON(pdx50, {
	style: function(feature) {
		return { color: '#000' };
	}
});
map.addLayer(pdx_buffer);
//basemaps object
var baseMaps = {
	"Terrain": terrain_layer,
"Toner": toner_layer};
//vector layer object
var overlayMaps = {
	'GeoJSON Scribble': gj_features,
	States: states,
	'Heritage Trees': trees,
	'PDX Buffer': pdx_buffer
}
//pass both objects to layers() and add to the map
L.control.layers(baseMaps, overlayMaps).addTo(map);