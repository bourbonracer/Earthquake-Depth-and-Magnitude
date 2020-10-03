// Query URL
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Get request to query URL 
d3.json(queryUrl, function(data) {
    var myMap = L.map("mapid", {
        center: [37.09, -95.71],
        zoom: 3
    });
    
    for (var i = 0; i < data.length;i++) {
        var color = "";
        var depth = feature.geometry.coordinates[2]
        if (depth >= 90) {
            color = "#F20101";
        }
        else if (depth >= 70) {
            color = "#F26E01";
        }
        else if (depth >= 50) {
            color = "#F2BB01";
        }
        else if (depth >= 30) {
            color="#E4F201";
        }
        else if (depth >= 10) {
            color = "#B8F201";
        }
        else {
            color = "#27F201"
        };
    }
function createFeatures(earthquakeData) {
    // Add circles to map
    L.circle([earthquakeData.geometry.coordinates[1],
        earthquakeData.geometry.coordinates[0]], {
            fillOpacityr: 0.75,
            fillColor: color,
            radius: feature.properties.mag * 1000
        }).bindPopup("<h3> Location: " + feature.properties.place + 
        "</h3><hr><p>" + "Magnitude: " + feature.properties.mag + 
        "<br> Depth: " + feature.geometry.coordinates[2])
}

function createMap(earthquakes) {

    // Define streetmap and darkmap layers
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    });
    
    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY
    });

    var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });

    // Define a baseMaps object to hold our base layers
    var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap,
    "Light Map": light
    };

    // Create overlay object to hold our overlay layer
    var overlayMaps = {
    Earthquakes: earthquakes
    };

    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("mapid", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [light, earthquakes]
    });

    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
}
});