function initMap() {

    map = new google.maps.Map(document.getElementById('map-contact'), {
        center: {lat:
            59.9885143849485, lng: 30.244951444519064},
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scrollwheel: false
    });

    var mapStyles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    map.setOptions({styles: mapStyles});

    google.maps.event.addDomListener(window, 'resize', function () {
        var center1 = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center1);
    });

    var geomark = {
        url: '/img/icons/geomark.png',
        size: new google.maps.Size(30, 36)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 59.994009, lng: 30.235038},
        map: map,
        icon: geomark,
        title: 'Санкт-Петербург, Мебельный проезд, 4'
    });
}


/*

 if (document.getElementById('map-contact')) {
 mapContacts = new google.maps.Map(document.getElementById('map-contacts'), {
 center: {lat: 59.9184953455408, lng: 30.345464577148505},
 zoom: 15,
 disableDefaultUI: true,
 zoomControl: true,
 scrollwheel: false
 });






 */