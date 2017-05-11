/**
 * Created by Felipe González Alfaro on 11-05-17.
 */
var map;

var mapquestOSM = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
    maxZoom: 17,
    subdomains: ["otile1", "otile2", "otile3", "otile4"],
    attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});

var mapquestOAM = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
    maxZoom: 17,
    subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"],
    attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});

var hostedTiles = new L.tileLayer('http://{s}.tiles.mapbox.com/v3/mapbox.geography-class/{z}/{x}/{y}.png', {
    tms: false,
    attribution: 'Tiles Courtesy of <a href="http://tiles.mapbox.com/mapbox/map/geography-class" target="_blank">MapBox</a>',
    subdomains: ["a", "b", "c", "d"],
    opacity: 0.7
});

var mbTiles = new L.tileLayer('mbtiles.php?z={z}&x={x}&y={y}', {
    tms: true,
    attribution: 'Tiles Courtesy of <a href="http://tiles.mapbox.com/mapbox/map/geography-class" target="_blank">MapBox</a>',
    opacity: 0.7
});

map = new L.Map("map", {
    zoom: 3,
    center: [-33.45, -70.666667],
    layers: [mapquestOSM, mbTiles]
});

var baseLayers = {
    "MapQuest Streets": mapquestOSM,
    "MapQuest Aerial": mapquestOAM
};
var overlays = {
    "Local MBTiles File": mbTiles,
    "Hosted Tiles": hostedTiles
};

layersControl = new L.Control.Layers(baseLayers, overlays, {
    collapsed: false
});

map.addControl(layersControl);
