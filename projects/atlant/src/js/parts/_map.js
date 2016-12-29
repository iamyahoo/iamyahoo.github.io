var mapMain;

function initMap() {

    var mapStyles = [{"featureType":"water","stylers":[{"color":"#0e171d"}]},{"featureType":"landscape","stylers":[{"color":"#1e303d"}]},{"featureType":"road","stylers":[{"color":"#1e303d"}]},{"featureType":"poi.park","stylers":[{"color":"#1e303d"}]},{"featureType":"transit","stylers":[{"color":"#182731"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#f0c514"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1e303d"},{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#e77e24"},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#94a5a6"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"},{"color":"#e84c3c"}]},{"featureType":"poi","stylers":[{"color":"#e84c3c"},{"visibility":"off"}]}];

    if (document.getElementById('map-main')) {
        mapMain = new google.maps.Map(document.getElementById('map-main'), {
            center: {lat: 59.96017804202823, lng: 30.318942894409247},
            zoom: 13,
            disableDefaultUI: true,
            zoomControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = mapMain.getCenter();
            google.maps.event.trigger(mapMain, 'resize');
            mapMain.setCenter(center1);
        });

        mapMain.setOptions({styles: mapStyles});
    }

    var geomarkMain = {
        url: '/img/icons/geomark-main.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSubway = {
        url: '/img/icons/geomark-subway.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkShip = {
        url: '/img/icons/geomark-ship.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkFortress = {
        url: '/img/icons/geomark-fortress.png',
        size: new google.maps.Size(40, 40)
    };


    var placeHome = new google.maps.Marker({
        position: {lat: 59.962624, lng: 30.328382},
        map: mapMain,
        icon: geomarkMain,
        title: 'ул. Мира, дом 36, литера А.'
    });

    var placeSubway = new google.maps.Marker({
        position: {lat: 59.956257, lng: 30.318911},
        map: mapMain,
        icon: geomarkSubway,
        title: 'метро Горьковская'
    });

    var placeAurora = new google.maps.Marker({
        position: {lat: 59.955441, lng: 30.337375},
        map: mapMain,
        icon: geomarkShip,
        title: 'Крейсер Автора'
    });

    var placeFortress = new google.maps.Marker({
        position: {lat: 59.950802, lng: 30.319523},
        map: mapMain,
        icon: geomarkFortress,
        title: 'Петропавловская крепость.'
    });
}
