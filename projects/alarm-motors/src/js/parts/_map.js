//yandex maps
var myMap;

ymaps.ready(init);

function init () {
    //map initialization
    myMap = new ymaps.Map('map', {
        center: [59.958981838784524,30.321370846679603],
        zoom: 10,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    // zoom control
    myMap.controls.add(new ymaps.control.ZoomControl({
        options: {
            position: {
                right: 15,
                top: 100
            }
        }
    }));

    // disable zoom on scroll
    myMap.behaviors.disable('scrollZoom');


    // map placemarks
    var path = '../build/img/icons/';
    myPlacemark1 = new ymaps.Placemark([60.059781757208725,30.306588499999958], {
        hintContent: 'Выборгское шоссе, д. 23 к.1'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: path + 'placemark1.png',
        iconImageSize: [34, 44],
        iconImageOffset: [-16, -42]
    });

    myPlacemark2 = new ymaps.Placemark([59.99671775755763,30.29844949999991], {
        hintContent: 'Коломяжский пр., д. 18А'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: path + 'placemark2.png',
        iconImageSize: [34, 44],
        iconImageOffset: [-16, -42]
    });

    myPlacemark3 = new ymaps.Placemark([59.84691575838345,30.21297549999995], {
        hintContent: 'Проспект М.Жукова, д. 51'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: path + 'placemark3.png',
        iconImageSize: [34, 44],
        iconImageOffset: [-16, -42]
    });

    myMap.geoObjects.add(myPlacemark1)
                    .add(myPlacemark2)
                    .add(myPlacemark3);

}
