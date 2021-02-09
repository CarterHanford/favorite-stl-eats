// add features to the map
var mymap = L.map('mapid').setView([38.627, -90.199], 12);

// add markers
var marker = L.marker([38.645300, -90.261950]).addTo(mymap);
marker.bindPopup("<b>El Burro Loco</b><br>Mexican Cuisine");

var marker = L.marker([38.627319,-90.252312]).addTo(mymap);
marker.bindPopup("<b>Beast Butcher & Block</b><br>Fantastic BBQ");

var marker = L.marker([38.627022, -90.258461]).addTo(mymap);
marker.bindPopup("<b>Sameem Afghan Restaraunt</b><br>Really good curry chicken!");

var marker = L.marker([38.63288660396059, -90.23393133069318]).addTo(mymap);
marker.bindPopup("<b>Chipotle Mexican Grill</b><br>My all time favorite food");

var marker = L.marker([38.61025070108347, -90.24112380185795]).addTo(mymap);
marker.bindPopup("<b>Pho Long Restaraunt</b><br>Never had Pho, but want to try");


// create popup for when users click anywhere on the map
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

// change basemap
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);
