$("#devotional-choice").click(function(){
    $("#sermon-selected").addClass("hidden");
    $("object#history-selected").addClass("hidden");
    $("object#devotional-selected").removeClass("hidden");
    
    document.getElementById("spiritual-choice").innerHTML = "Daily Devotional";
});

$("#sermon-choice").click(function(){
    $("#sermon-selected").removeClass("hidden");
    $("object#history-selected").addClass("hidden");
    $("object#devotional-selected").addClass("hidden");
    
    document.getElementById("spiritual-choice").innerHTML = "Choose a Sermon";
});

$("#history-choice").click(function(){
    $("#sermon-selected").addClass("hidden");
    $("object#history-selected").removeClass("hidden");
    $("object#devotional-selected").addClass("hidden");
    
    document.getElementById("spiritual-choice").innerHTML = "Choose a from History";
});



$(document).ready(function(){
   $("object#devotional-selected").removeClass("hidden");
    $("object#history-selected").addClass("hidden");
    $("#sermon-selected").addClass("hidden");
    
    document.getElementById("spiritual-choice").innerHTML = "Daily Devotional";
});