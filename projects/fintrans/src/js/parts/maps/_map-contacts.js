$(window).on('load',function(){
    if (document.getElementById('map-contacts')!=null){
        initMap();
    }
});

if (document.getElementById('map-contacts')) {
    mapContacts = new google.maps.Map(document.getElementById('map-contacts'), {
        center: {lat: 59.9184953455408, lng: 30.345464577148505},
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false
    });

    google.maps.event.addDomListener(window, 'resize', function () {
        var center1 = mapContacts.getCenter();
        google.maps.event.trigger(mapContacts, 'resize');
        mapContacts.setCenter(center1);
    });

    var mapStyles = [];
    mapContacts.setOptions({styles: mapStyles});
}

var geomark = {
    url: '/img/icons/icon-geomark_office.png',
    size: new google.maps.Size(37, 56)
};

var markCity1 = new google.maps.Marker({
    position: {lat: 59.917506, lng: 30.347174},
    map: mapContacts,
    icon: geomark,
    title: 'ул. Тюшина д. 11 лит. А'
});
