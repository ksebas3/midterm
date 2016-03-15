var map;

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 30, lng: -90},
    zoom: 4
  });
//forecast
var ctaLayer = new google.maps.KmlLayer({
  url: 'http://www.srh.noaa.gov/gis/kml/webpageforecast/coordinateforecast.kmz',
  preserveViewport: true,
  map: map
});
//gold! http://catalog.data.gov/dataset/sediment-hosted-gold-deposits-of-the-world3e011/resource/7376251e-0485-47e5-a72d-007402731bbc
var ctaLayer = new google.maps.KmlLayer({
  url: 'http://mrdata.usgs.gov/sedau/sedau.kml',
  preserveViewport: true,
  map: map
});
//air quality
var kmlLayer = new google.maps.KmlLayer({
    url: ' http://www.epa.gov/airnow/today/airnow.kml',
    preserveViewport: true,
    map: map
  });

}
