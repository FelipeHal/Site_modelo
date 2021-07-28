$(document).ready(function(){
    //#carouselOurTem
    
    $(".owl-one").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items:1,
            },
            485 : {
                items: 1,
            },
            728 : {
                items: 2,
            },
            960 : {
                items: 3,
            },
            1200 : {
                items: 4,
            },
        },
    });

    //#carouselTestimonials
    //
    
    $(".owl-two").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items:1,
            },
            485 : {
                items: 1,
            },
            728 : {
                items: 1,
            },
            960 : {
                items: 1,
            },
            1200 : {
                items: 1,
            },
        },
    });
})