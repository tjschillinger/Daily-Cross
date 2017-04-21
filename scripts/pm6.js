$("#prayer-act-1").click(function(){
    $("#prayer-act-1-reveal").toggle("hidden");
    $(".prayer-round-box-1").toggleClass("active");
    $(".prayer-round-box-1").toggleClass("flat-bottom-2");
    $(".offering-link-1").toggleClass("white");
});

$("#prayer-act-2").click(function(){
    $("#prayer-act-2-reveal").toggle("hidden");
    $(".prayer-round-box-2").toggleClass("active");
    $(".prayer-round-box-2").toggleClass("flat-bottom-2");
    $(".offering-link-2").toggleClass("white");
    $(".fa-info-circle").toggleClass("white");
});

$("#prayer-act-3").click(function(){
    $("#prayer-act-3-reveal").toggle("hidden");
    $(".prayer-round-box-3").toggleClass("active");
    $(".prayer-round-box-3").toggleClass("flat-bottom-2");
    $(".offering-link-3").toggleClass("white");
    $(".fa-info-circle").toggleClass("white");
});

$("#prayer-act-4").click(function(){
    $("#prayer-act-4-reveal").toggle("hidden");
    $(".prayer-round-box-4").toggleClass("active");
    $(".prayer-round-box-4").toggleClass("flat-bottom-2");
    $(".offering-link-4").toggleClass("white");
    $(".fa-info-circle").toggleClass("white");
});

$("#prayer-act-5").click(function(){
    $("#prayer-act-5-reveal").toggle("hidden");
    $(".prayer-round-box-5").toggleClass("active");
    $(".prayer-round-box-5").toggleClass("flat-bottom-2");
    $(".offering-link-5").toggleClass("white");
    $(".fa-info-circle").toggleClass("white");
});

$("#help_2").click(function(){
     introJs().start();
});

$(document).ready(function(){
    $("#prayer-act-1-reveal").addClass("hidden");
    $("#prayer-act-2-reveal").addClass("hidden");
    $("#prayer-act-3-reveal").addClass("hidden");
    $("#prayer-act-4-reveal").addClass("hidden");
    $("#prayer-act-5-reveal").addClass("hidden");
});