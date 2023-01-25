$(function(){
    var mixer = mixitup('.directions__cards');


    $('.directions__button-link').on('click', function(){
        $('.directions__button-link').removeClass('directions__button-link--active')
        $(this).addClass('directions__button-link--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        waitForAnimate: false,
        draggable: false,
    })

    $('.team__slider-next').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
    $('.team__slider-prev').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.testi__slider').slick({
        arrows: false,
        slidesToShow: 1,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.testi__dots'),
        
    })
    $('.testi__slide-prev').on('click', function(e){
        e.preventDefault()
        $('.testi__slider').slick('slickPrev')
    })
    $('.testi__slide-next').on('click', function(e){
        e.preventDefault()
        $('.testi__slider').slick('slickNext')
    })

    $('.program__accordeon-link').on('click', function(e){
        e.preventDefault()
        $(this).toggleClass('program__accordeon-link--active')
        $(this).children('.program__accordeon-text').slideToggle()
    })

})