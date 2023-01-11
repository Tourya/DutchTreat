$(document).ready(function () {

    console.log("Hello Pluralsight!");

    let theForm = $('#theForm');
    theForm.hide();

    let buyButton = $('#buyBtn');
    buyButton.on('click', () => {
        console.log('Buying item');
    });

    let productInfo = $('.product-props li');
    productInfo.on('click', function () {
        console.log('You clicked on ' + $(this).text());
    });

    let $loginToggle = $('#loginToggle');
    let $popupForm = $('.popup-form');

    $loginToggle.on('click', function () {
        $popupForm.fadeToggle(1000);
    });
});