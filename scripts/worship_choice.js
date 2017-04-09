$("#contemporary-choice").click(function(){
    $("#traditional-hymns").addClass("hidden");
    $("#contemporary-worship").removeClass("hidden");
});

$("#traditional-choice").click(function(){
    $("#traditional-hymns").removeClass("hidden");
    $("#contemporary-worship").addClass("hidden");
});



$(document).ready(function(){
    $("#traditional-hymns").addClass("hidden");
});