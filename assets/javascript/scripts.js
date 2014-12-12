// $('[data-toggle=tooltip]').tooltip();
// $('[data-toggle=popover]').popover();
// // flexslider turn on
// $(window).load(function(){
//   $('.flexslider').flexslider({
//     animation: "slide"
//   });
// });

// $("html, body").animate({ scrollTop: 0 }, "slow");

$("a").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
});