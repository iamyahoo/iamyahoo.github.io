var map1;
var map2;

function initMap() {

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 59.991064160768, lng: 30.25176215832516},
            zoom: 16,
            disableDefaultUI: true,
            zoomControl: true
        });
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 59.98565525763078, lng: 30.353507499999907},
            zoom: 16,
            disableDefaultUI: true,
            zoomControl: true
        });
    }

    google.maps.event.addDomListener(window, 'resize', function() {
        var center1 = map1.getCenter();
        var center2 = map2.getCenter();
        google.maps.event.trigger(map1, 'resize');
        google.maps.event.trigger(map2, 'resize');
        map1.setCenter(center1);
        map2.setCenter(center2);
    });

    var geomark = {
        url: '/img/icon/geomark_icon.png',
        //url: '/mebelcity/web/img/icon/geomark_icon.png',
        size: new google.maps.Size(41, 66)
    };

    var mark1 = new google.maps.Marker({
        position: {lat: 59.991038, lng: 30.252406},
        map: map1,
        icon: geomark
    });

    var mark2 = new google.maps.Marker({
        position: {lat: 59.985828, lng: 30.353287},
        map: map2,
        icon: geomark
    });
}

(function($) {

    $('.map-switcher').each( function() {
        $(this).find('ul.map__buttons').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).closest('.map-switcher').find('div.map__item').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

})(jQuery);
