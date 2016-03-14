
 /*
 * Get GeoJSON data from an external website using jQuery's getJSON function.
 *
 * function: getJSON
 * documentation: http://api.jquery.com/jquery.getjson/
 */

$.getJSON( "http://example.com/layer1.geojson", function( geojsonFeatures ) {
  // code to do something with geojsonFeatures goes here, such as the L.geoJson function with the onEachFeature option
});
/*
 * Add layer(s) from an online KML or KMZ file
 *
 * function: google.maps.KmlLayer
 * documentation: https://developers.google.com/maps/documentation/javascript/examples/layer-kml
 */


var kml1 = new google.maps.KmlLayer({
  url: 'http://example.com/layer1.kmz',
  preserveViewport: true // setting to true will prevent the map from zooming to this layer
});
kml1.setMap( map );

/*
 * Create a basic map.
 * documentation: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

var map;
function initMap() {
  map = new google.maps.Map( document.getElementById( 'map' ), {
    center: { lat: 30, lng: -90 },
    zoom: 4
  });

  // code to add layers goes here

}
/*
 * Adds a map control to select a basemap. Requires a div with id="BasemapToggle" inside the map div.
 *
 * function name: BasemapToggle
 * module name: "esri/dijit/BasemapToggle"
 * documentation: https://developers.arcgis.com/javascript/jssamples/widget_toggle.html
 * example: http://developers.arcgis.com/javascript/samples/widget_toggle/
 */

var toggle = new BasemapToggle({
  map: map,
  basemap: "hybrid"
}, "BasemapToggle");
toggle.startup();
/*
 * Add layer(s) from an ArcGIS web service
 *
 * function name: ArcGISDynamicMapServiceLayer
 * module name: "esri/layers/ArcGISDynamicMapServiceLayer"
 * documentation: https://developers.arcgis.com/javascript/jssamples/map_dynamic.html
 * example: http://developers.arcgis.com/javascript/samples/map_dynamic/
 */

// Create a layer object from an ArcGIS Server web service, with no options
var layer1 = new ArcGISDynamicMapServiceLayer( "http://example.com/arcgis/rest/services/Layer1/MapServer" );
map.addLayer(layer1); // add the layer object to the map

// Create a layer object from an ArcGIS Server web service, setting the opacity option
var layer2 = new ArcGISDynamicMapServiceLayer( "http://example.com/arcgis/rest/services/Layer2/MapServer", {
  "opacity": 0.35
});
map.addLayer(layer2); // add the layer object to the map

/*
 * Create a simple map with the ArcGIS JavaScript API.
 * example: http://developers.arcgis.com/javascript/samples/map_simple/
 */

var map;
require([
  "esri/map", // modules need to be added to this list before dojo/domReady, separated by a comma and enclosed in quotation marks
  "dojo/domReady!"
], function (
  Map // the names of functions corresponding to the modules need to be added to this list, separated by a comma
) {
  map = new Map("map", {
    basemap: "topo", // list of basemap names: https://developers.arcgis.com/javascript/jsapi/esri.basemaps-amd.html
    center: [-90, 30],
    zoom: 4
  });

  // code to add layers and map control goes here

});
