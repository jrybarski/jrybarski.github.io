function loadGoogleMaps() {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAktxQCABX60D1DYDbbi6k2fOjHQPQwmZM&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function initMap() {
    var warsztatLocation = {lat: 50.46553524496967, lng: 17.352096009986635 }; 

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: warsztatLocation,
    });

    var marker = new google.maps.Marker({
        position: warsztatLocation,
        map: map,
        title: "Nasz Warsztat Samochodowy",
        icon: {
            url: "assets/pineska.png",
            scaledSize: new google.maps.Size(100, 100)
        }
    });
}

// Załaduj Google Maps API po załadowaniu strony
window.onload = loadGoogleMaps;
