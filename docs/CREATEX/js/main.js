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
        responsive:
        [
            {
                breakpoint:1100,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint:850,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                    draggable:true,
                    dots:true,
                    appendDots: $('.team__slider-dots')
                
                }
            }
        ]
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

    $('.footer__top-title').on('click',function(){
        $(this).toggleClass('footer__top-title--active')
        $(this).next().slideToggle()
    })


    $(".header__nav-list a, .header__button, .footer__top-link, .footer__bot-button, .header__body-button, .footer__top-title ").on("click", function(e){
        e.preventDefault()
        var id = $(this).attr('href'),
        top=$(id).offset().top -100
        $('body,html').animate({scrollTop:top}, 800 )
    })
    $('.burger, .overlay, .header__top a ').on('click', function(e){
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--active')
        $('.burger').toggleClass('burger--active')
        $('.burger__center').toggleClass('burger__center--active')
    })
    
    setInterval(() =>{

        if($(window).scrollTop()>0 && $('.header__top').hasClass('header__top--open')==false){
            $('.burger').addClass('burger--follow')
        }
        else{
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

})