$(document).ready(function(){
$('.span_1_of_3, .testimonial h1').mouseenter(function() {
        $(this).fadeTo(0,1);
    });

$('.span_1_of_3, .testimonial h1').mouseleave(function() {
    $(this).fadeTo('super fast', 0.5);
});

$('h1, h2, h3').stop(true).fadeIn({
        duration: 5000,
        queue: false
    }).css('display', 'none').slideDown(1000);
});
