// Create a map object and specify the center lat/lon and zoom level
var map = L.map('mapid').setView([30,-90], 4);

var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var satellite = L.tileLayer( 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
  	type: 'sat',
  	ext: 'jpg',
  	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
  	subdomains: '1234'
  });

  // NEW: create an object to hold the group of earthquake points
  var featuregroup = L.layerGroup();

  function addpopup( feature, layer ){
    var html = feature.properties.mag + " magnitude, " + feature.properties.place;
    layer.bindPopup( html );

    // NEW: add the current earthquake point to the group
    featuregroup.addLayer( layer );
  }

  $.getJSON( "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson", function( geojsonFeatures ){
    L.geoJson( geojsonFeatures, { onEachFeature: addpopup } ).addTo(map);
  });

  // NEW: add the group of earthquake points to the map.
  featuregroup.addTo( map );


//Copy and paste code from http://leafletjs.com/reference.html#tilelayer-wms and change the tile layer based on the data that you want to show.
var Lightening = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity:  0.25
}).addTo(map);

//copy and paste the previous code (var nexrad) for each layer that you want and rename and use the new WMS from Data source examples on Moodle.

var WeatherRadar = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_rtma_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity:  0.25
}).addTo(map);

var Warnings = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer/WMSServer", {
    layers: '11',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity: 0.25
}).addTo(map);

//Create object with layers for each basemap.
var baseMaps = {

  "Streets": streets,
  "Satellite": satellite};

var overlays = {
		"Lightening": Lightening,
    "WeatherRadar": WeatherRadar,
    "Warnings": Warnings,
    "earthquakes": featuregroup

  }

L.control.layers(baseMaps, overlays).addTo(map);
