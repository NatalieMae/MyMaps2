const myMap = L.map('map', {
    center: [43.059770, -87.883400],
    zoom: 12,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)

const marker = L.marker([43.059770, -87.883400])
marker.addTo(myMap).bindPopup('<p1><b>The Clock Tower, MKE, WI</b></p1>').openPopup()

function createMarker(place) {
    var marker = new leaflet.maps.Marker({
        map,
        position: place.geometry.location,
        animation: leaflet.maps.Animation.DROP,
        place:AnimationEffect,
    });
    marker.addListener("click", toggleBounce);
    leaflet.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name);
        infowindow.open(map, marker); 
    });
}

