$("#biblical_books").click(function(){
    $("#church_history_box").addClass("hidden");
    $("#biblical_books_box").removeClass("hidden");
});

$("#church_history").click(function(){
    $("#church_history_box").removeClass("hidden");
    $("#biblical_books_box").addClass("hidden");
});



$(document).ready(function(){
    $("#church_history_box").addClass("hidden");
});