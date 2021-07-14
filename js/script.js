$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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
    
})