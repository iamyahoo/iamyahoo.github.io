var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map-contacts'), {

        center: {
            lat: 59.9223051, lng: 30.3451454
        },
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        scrollwheel: false
    });

    var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
    map.setOptions({styles: mapStyles});

    google.maps.event.addDomListener(window, 'resize', function () {
        var center1 = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center1);
    });


    var markOffice1 = new google.maps.Marker({
        position: {lat: 59.9223051, lng: 30.3451454},
        map: map,
        icon: {
            anchor: new google.maps.Point(0, 0),
            url: 'data:image/svg+xml;utf-8, \
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="50px" viewBox="0 0 40 50"><path fill="rgb(255, 205, 0)" d="M20 0c11 0 20 9 20 20S20 50 20 50 0 31.1 0 20C0 9 9 0 20 0z"/></svg>'
        },
        title: 'ITS. Санкт-Петербург, Достоевского 44'
    });
}

window.onload = function() {

    if (document.getElementById('map-contacts')) {
        initMap();
    }
};
