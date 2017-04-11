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

$(document).ready(function(){
    $(".reveal-act").addClass("hidden");
    
    if (t == "2 pm" || "3 pm" || "4 pm" || "5 pm" || "6 pm" || "7 pm" || "8 pm" || "9 pm" || "10 pm" || "11 pm" || "12 am" || "1 am" || "2 am"){
        $("#evening").removeClass("hidden"); $("#morning").addClass("hidden");  
    }else{
        $("#evening").addClass("hidden"); $("#morning").removeClass("hidden");
    };
});