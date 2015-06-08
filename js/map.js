/**
 * Created by Ram on 04/06/15.
 */
    /*
var edison = new google.maps.LatLng(40.518715, -74.412095);
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 13,
        center: edison
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    marker = new google.maps.Marker({
        map: map,
        draggable:false,
        animation: google.maps.Animation.DROP,
        position: edison
    });
    google.maps.event.addListener(marker);
}

google.maps.event.addDomListener(window, 'load', initialize);
*/

var map;
var marker;
function initialize() {
    var mapOptions = {
        zoom: 15
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({

                map: map,

            });
            marker = new google.maps.Marker ({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: pos
            });
            google.maps.event.addListener(marker);

            map.setCenter(pos);
        }, function() {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);