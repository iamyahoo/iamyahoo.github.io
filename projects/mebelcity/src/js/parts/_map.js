//yandex maps
ymaps.ready(init);

function init () {

    if (document.getElementById('map1')) {

        //map initialization
        var myMap1 = new ymaps.Map('map1', {
            center: [59.991064160768, 30.25176215832516],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

        // zoom control
        myMap1.controls.add(new ymaps.control.ZoomControl({
            options: {
                position: {
                    left: 15,
                    top: 50
                }
            }
        }));

        // disable zoom on scroll
        myMap1.behaviors.disable('scrollZoom');

        // map placemarks
        var path = '/mebelcity/web/img/icon/';
        myPlacemark1 = new ymaps.Placemark([59.99105500779744,30.251761515869067], {
            hintContent: 'Мебель-Сити 1'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: path + 'geomark_icon.svg',
            iconImageSize: [34, 44],
            iconImageOffset: [-16, -42]
        });

        myPlacemark2 = new ymaps.Placemark([59.98565525763078,30.353507499999907], {
            hintContent: 'Мебель-Сити 2'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: path + 'geomark_icon.svg',
            iconImageSize: [34, 44],
            iconImageOffset: [-16, -42]
        });

        myMap1.geoObjects
            .add(myPlacemark1)
            .add(myPlacemark2);
    }


    if (document.getElementById('map2')) {

        //map initialization
        var myMap2 = new ymaps.Map('map2', {
            center: [59.98565525763078, 30.353507499999907],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

        // zoom control
        myMap2.controls.add(new ymaps.control.ZoomControl({
            options: {
                position: {
                    left: 15,
                    top: 50
                }
            }
        }));

        // disable zoom on scroll
        myMap2.behaviors.disable('scrollZoom');

        // map placemarks
        var path = '/mebelcity/web/img/icon/';
        myPlacemark1 = new ymaps.Placemark([59.99105500779744,30.251761515869067], {
            hintContent: 'Мебель-Сити 1'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: path + 'geomark_icon.svg',
            iconImageSize: [34, 44],
            iconImageOffset: [-16, -42]
        });

        myPlacemark2 = new ymaps.Placemark([59.98565525763078,30.353507499999907], {
            hintContent: 'Мебель-Сити 2'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: path + 'geomark_icon.svg',
            iconImageSize: [34, 44],
            iconImageOffset: [-16, -42]
        });

        myMap2.geoObjects
            .add(myPlacemark1)
            .add(myPlacemark2);
    }
}

(function($) {
    $(function() {

        $('.map-switcher').each( function() {
            $(this).find('ul.map__buttons').on('click', 'li:not(.active)', function() {
                $(this).addClass('active').siblings().removeClass('active');
                $(this).closest('.map-switcher').find('div.map__item').removeClass('active').eq($(this).index()).addClass('active');
            });
        });

    });
})(jQuery);