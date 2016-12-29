var mapMain;

function initMap() {

    if (document.getElementById('map-main')) {
        mapMain = new google.maps.Map(document.getElementById('map-main'), {
            center: {lat: 59.94657619670656, lng: 30.31834207958991},
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = mapMain.getCenter();
            google.maps.event.trigger(mapMain, 'resize');
            mapMain.setCenter(center1);
        });

        var mapStyles = [];
        mapMain.setOptions({styles: mapStyles});
    }


    var placemark = {
        url: '/img/icons/placemark.png',
        size: new google.maps.Size(25, 37)
    };

    var markCity1 = new google.maps.Marker({
        position: {lat: 59.945695, lng: 30.288473},
        map: mapMain,
        icon: placemark,
        title: 'Санкт-Петербург'
    });

}