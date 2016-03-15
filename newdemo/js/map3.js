/*
 * Create a simple map with the ArcGIS JavaScript API.
 * example: http://developers.arcgis.com/javascript/samples/map_simple/
 */

var map;
require([
  "esri/map", // modules need to be added to this list before dojo/domReady, separated by a comma and enclosed in quotation marks
  "esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/dijit/BasemapToggle",
  "dojo/domReady!"
], function (
  Map,
  ArcGISDynamicMapServiceLayer,
  BasemapToggle
   // the names of functions corresponding to the modules need to be added to this list, separated by a comma
) {
  map = new Map("map", {
    basemap: "topo", // list of basemap names: https://developers.arcgis.com/javascript/jsapi/esri.basemaps-amd.html
    center: [-90, 30],
    zoom: 4
  });

  // code to add layers and map control goes here
  /*
   * Add layer(s) from an ArcGIS web service
   *
   * function name: ArcGISDynamicMapServiceLayer
   * module name: "esri/layers/ArcGISDynamicMapServiceLayer"
   * documentation: https://developers.arcgis.com/javascript/jssamples/map_dynamic.html
   * example: http://developers.arcgis.com/javascript/samples/map_dynamic/
   */

  // Create a layer object from an ArcGIS Server web service, with no options

  //snow monitoring
  var layer1 = new ArcGISDynamicMapServiceLayer( "http://gis.ncdc.noaa.gov/arcgis/rest/services/cdo/ghcnd/MapServer" );
  map.addLayer(layer1); // add the layer object to the map
//seagrasses
  // Create a layer object from an ArcGIS Server web service, setting the opacity option
  var layer2 = new ArcGISDynamicMapServiceLayer( "https://coast.noaa.gov/arcgis/rest/services/MarineCadastre/Seagrasses/MapServer/", {
    "opacity": 0.35
  });
  map.addLayer(layer2); // add the layer object to the map
//monthly extremess
  var layer1 = new ArcGISDynamicMapServiceLayer( "http://gis.ncdc.noaa.gov/arcgis/rest/services/cdo/extmo/MapServer" );
  map.addLayer(layer1); // add the layer object to the map

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
});
