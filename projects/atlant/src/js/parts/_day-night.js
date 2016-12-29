var promoSwitcher = $('.promo-switcher');
var btnDay = $('.promo-switcher__btn_day');
var btnNight = $('.promo-switcher__btn_night');

var promoDay = $('.promo__content_day');
var promoNight = $('.promo__content_night');

function doDay() {
    promoSwitcher.addClass('promo-switcher_day').removeClass('promo-switcher_night');
    promoNight.addClass('promo__content_hidden');
    promoDay.removeClass('promo__content_hidden');
}

function doNight() {
    promoSwitcher.addClass('promo-switcher_night').removeClass('promo-switcher_day');
    promoDay.addClass('promo__content_hidden');
    promoNight.removeClass('promo__content_hidden');
}

btnDay.on('click', function() {
    doDay();
});

btnNight.on('click', function() {
    doNight();
});
