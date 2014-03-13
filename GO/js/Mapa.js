$(document).ready(function () {
    PripremiMapu();

    setInterval(function () { Centriraj(); }, 10000);
});

var map, stop = true;

function PripremiMapu() {
    window.require([
    "esri/map",
    "esri/layers/MapImageLayer",
    "esri/layers/MapImage",
    "esri/dijit/LocateButton",
    "esri/dijit/Scalebar",
    "dojo/parser",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dojo/domReady!"
    ], function (
    Map, MapImageLayer, MapImage, LocateButton, Scalebar, parser
    ) {
        parser.parse();
        map = new Map("mapDiv", {
            center: [14.424173, 44.580180],
            zoom: 13,
            basemap: "gray" //"topo"//
        });
        map.on("load", function () {
            // create and add the layer
            var mil = new MapImageLayer();
            map.addLayer(mil);

            // create an add the actual image
            var mi = new MapImage({
                //'extent': { 'xmin': 14.275223, 'ymin': 44.442384, 'xmax': 14.578070, 'ymax': 44.582454 },
                'extent': { 'xmin': 14.280652640827688, 'ymin': 44.44208229575382, 'xmax': 14.577904089344843, 'ymax': 44.57843914552135 },
                'href': 'img/losinj_mobile_velika.jpg'
            });
            mil.addImage(mi);
        });
        //44.57843914552135, 14.280652640827688

        window.geoLocate = new LocateButton({
            map: map
        }, "LocateButton");
        window.geoLocate.startup();

        var scalebar = new Scalebar({
            map: map,
            // "dual" displays both miles and kilmometers
            // "english" is the default, which displays miles
            // use "metric" for kilometers
            scalebarUnit: "dual"
        });
    });
}

function Centriraj() {
    if (stop) {
        return;
    }
    $('.zoomLocateButton').click();
}

function Zaustavi() {
    stop = !stop;

    if (stop) {
        $("#lnkStop")[0].innerText = "Pokreni";
    } else {
        $("#lnkStop")[0].innerText = "Zaustavi";
    }
}

/*todo;

Tipka di vraca kartu na početnu poziciju (centar)

*/