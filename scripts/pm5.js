$("#prayer-act-1").click(function(){
    $("#prayer-act-1-reveal").toggle("hidden");
    $(".prayer-top-box").toggleClass("active");
    document.getElementById("prayer-list-2").data = "";
    
    $("#prayer-act-2-reveal").addClass("hidden");
    $("#prayer-act-3-reveal").addClass("hidden");
});

$("#prayer-act-2").click(function(){
    $("#prayer-act-2-reveal").toggle("hidden");
    $(".prayer-middle-box").toggleClass("active");
    document.getElementById("prayer-list-2").data = "https://en.todoist.com/app?lang=en&v=861#start";
    
    $("#prayer-act-3-reveal").addClass("hidden");
    $("#prayer-act-1-reveal").addClass("hidden");
});

$("#prayer-act-3").click(function(){
    $("#prayer-act-3-reveal").toggle("hidden");
    $("#prayer-act-3").toggleClass("flat-bottom");
    $(".prayer-bottom-box").toggleClass("active");
    document.getElementById("prayer-list-2").data = "";
    
    $("#prayer-act-1-reveal").addClass("hidden");
    $("#prayer-act-2-reveal").addClass("hidden");
});

$(document).ready(function(){
    $("#prayer-act-1-reveal").addClass("hidden");
    $("#prayer-act-2-reveal").addClass("hidden");
    $("#prayer-act-3-reveal").addClass("hidden");
    
});