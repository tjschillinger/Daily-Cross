var t = moment().format('h a');

$(".exercise-box").mouseover(function(){
    $(this).children(".act").addClass("hidden");
    $(this).children(".reveal-act").removeClass("hidden");
});

$(".exercise-box").mouseleave(function(){
    $(".act").removeClass("hidden");
    $(".reveal-act").addClass("hidden");
});

$(".projects-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#humankind").offset().top
    }, 1000);
});

$("#help").click(function(){
     introJs().start();
});

$(document).ready(function(){
    $(".reveal-act").addClass("hidden");
});