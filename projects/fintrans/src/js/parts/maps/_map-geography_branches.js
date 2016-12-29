$(window).on('load', function() {
    if (document.getElementById('map-geography_branches')) {
        initMap();
        mapBranch = new google.maps.Map(document.getElementById('map-geography_branches'), {
            center: {lat: 58.781337907139104, lng: 45.93300425000007},
            zoom: 5,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = mapBranch.getCenter();
            google.maps.event.trigger(mapBranch, 'resize');
            mapBranch.setCenter(center1);
        });

        var mapStyles = [];
        mapBranch.setOptions({styles: mapStyles});
    }
});

var geomark = {
    url: '/img/svg/svg-geomark_black.svg',
    size: new google.maps.Size(25, 37)
};

var markCity1 = new google.maps.Marker({
    position: {lat: 59.945695, lng: 30.288473},
    map: mapBranch,
    icon: geomark,
    title: 'Санкт-Петербург'
});
