var map1;
var map2;
var map3;

function initMap() {

    var mapStyles = [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 59.945695, lng: 30.288473},
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        map1.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 59.963584, lng: 30.321767},
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center2 = map2.getCenter();
            google.maps.event.trigger(map2, 'resize');
            map2.setCenter(center2);
        });

        map2.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map3')) {
        map3 = new google.maps.Map(document.getElementById('map3'), {
            center: {lat: 59.98503189008821, lng: 30.274666121765115},
            zoom: 15,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center3 = map3.getCenter();
            google.maps.event.trigger(map3, 'resize');
            map3.setCenter(center3);
        });

        map3.setOptions({styles: mapStyles});
    }


    var geomarkDark = {
        url: '/img/icons/icon-geomark.png',
        size: new google.maps.Size(25, 37)
    };

    var geomarkGold = {
        url: '/img/icons/icon-geomark_gold.png',
        size: new google.maps.Size(25, 37)
    };

    var geomarkPark = {
        url: '/img/icons/icon-geomark_leaf.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSubway = {
        url: '/img/icons/icon-geomark_subway.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSubway2 = {
        url: '/img/icons/icon-geomark_subway.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSchool = {
        url: '/img/icons/icon-geomark_school.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkBaby = {
        url: '/img/icons/icon-geomark_baby.png',
        size: new google.maps.Size(40, 40)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 59.945695, lng: 30.288473},
        map: map1,
        icon: geomarkDark,
        title: 'Средний проспект В. О., д. 4, литер А, оф. 41'
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 59.963584, lng: 30.321767},
        map: map2,
        icon: geomarkDark,
        title: 'ул. Рентгена д. 7, БЦ «Стельп», 1 этаж'
    });

    var markAviator = new google.maps.Marker({
        position: {lat: 59.984626, lng: 30.276653},
        map: map3,
        icon: geomarkGold,
        title: 'Авиатор - клубный дом на Савушкина 43'
    });

    var markPark1 = new google.maps.Marker({
        position: {lat:  59.979082, lng: 30.260002},
        map: map3,
        icon: geomarkPark,
        title: 'Центральный парк культуры и отдыха им.С.М. Кирова'
    });

    var markPark2 = new google.maps.Marker({
        position: {lat:  59.978732, lng: 30.289136},
        map: map3,
        icon: geomarkPark,
        title: 'ПКиО Каменный Остров'
    });

    var subway = new google.maps.Marker({
        position: {lat:  59.989581, lng: 30.255283},
        map: map3,
        icon: geomarkSubway,
        title: 'Метро Старая Деревня'
    });

    var subway2 = new google.maps.Marker({
        position: {lat:  59.985430, lng: 30.301138},
        map: map3,
        icon: geomarkSubway,
        title: 'Метро Черная речка'
    });

    var school1 = new google.maps.Marker({
        position: {lat:  59.984358,  lng: 30.268799},
        map: map3,
        icon: geomarkSchool,
        title: 'Школа № 46 с углубленным изучением английского языка'
    });

    var school2 = new google.maps.Marker({
        position: {lat:  59.986579,  lng: 30.262281},
        map: map3,
        icon: geomarkSchool,
        title: 'Школа № 44'
    });

    var school3 = new google.maps.Marker({
        position: {lat:  59.988789,  lng: 30.290339},
        map: map3,
        icon: geomarkSchool,
        title: 'Гимназия № 631'
    });

    var baby1 = new google.maps.Marker({
        position: {lat:  59.984703, lng: 30.274230},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад №48'
    });

    var baby2 = new google.maps.Marker({
        position: {lat:  59.985816, lng: 30.280945},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад №20'
    });

    var baby3 = new google.maps.Marker({
        position: {lat:  59.988106, lng: 30.285313},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад №35'
    });

    var baby4 = new google.maps.Marker({
        position: {lat:  59.978911, lng: 30.295447},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад "Кудесница'
    });

    //var marianna = new google.maps.Marker({
    //    position: {lat:  59.922197, lng: 30.346920},
    //    map: map3,
    //    title: 'логово ведьмы'
    //});
}
