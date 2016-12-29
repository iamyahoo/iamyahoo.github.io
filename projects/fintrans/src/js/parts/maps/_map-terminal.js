$(window).on('load', function() {
    if (document.getElementById('map-terminal')) {
        initMap();
        mapService = new google.maps.Map(document.getElementById('map-terminal'), {
            center: {lat: 55.01735812882684, lng: 55.01735812882684},
            zoom: 5,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center2 = mapService.getCenter();
            google.maps.event.trigger(mapService, 'resize');
            mapService.setCenter(center2);
        });

        var mapStyles = [];
        mapService.setOptions({styles: mapStyles});
    }
});

var geomark = {
    url: '/img/svg/svg-geomark_black.svg',
    size: new google.maps.Size(25, 37)
};

var markCity1 = new google.maps.Marker({
    position: {lat: 59.945695, lng: 30.288473},
    map: mapService,
    icon: geomark,
    title: 'Санкт-Петербург'
});