$(function(){
    var mixer = mixitup('.directions__cards');


    $('.directions__button-link').on('click', function(){
        $('.directions__button-link').removeClass('directions__button-link--active')
        $(this).addClass('directions__button-link--active')
    })
})