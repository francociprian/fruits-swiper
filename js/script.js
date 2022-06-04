let swiper = new Swiper('.swiper-container',{
    mousewhel:true,
    slidesPerView: 4.5,
    spaceBetween:60,
    paginationClickable:true,
    centeredSlides:true,
    loop:true,
    loopAdditionalSlides:100,
    autoplay: {
        delay: 3000,
    },
    // pagination:{
    //     el:'.swiper-pagination',
    //     clickable:true,
    //     // dynamicBullets:true,
    //     // dynamicMainBullets:2,
    //     // hideOnClick:true,
    // },

    on:{
        slideChengeTransitionStart: function () {
            anime({
                targets: '.swiper-slide-active .tag',
                scale: [0.1, 1],
                opacity:[0, 1],
                easing: 'easeInOutQuart'
            });
            anime({
                targets: '.swiper-slide-active .img',
                scale: [3, 1],
                opacity:[0, 1],
                delay:500,
                easing: 'easeInOutQuart'
            });
            anime({
                targets: '.swiper-slide-active .elmt',
                translateY: [100, 1],
                opacity:[0,1],
                delar:anime.tragger(170,{start:1000}),
                easing: 'easeInOutQuart'
            });
        }
    }
});