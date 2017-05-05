$("#scroll-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top -140
    }, 1000);
});

$(".purpose-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#purpose").offset().top -140
    }, 1000);
});

$(".questions-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#questions").offset().top -140
    }, 1000);
});

$(".information-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#information").offset().top -140
    }, 1000);
});

$(".concepts-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#concepts").offset().top -140
    }, 1000);
});

$(".assumptions-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#assumptions").offset().top -140
    }, 1000);
});

$(".Inferences-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#Inferences").offset().top -140
    }, 1000);
});

$(".Implications-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#Implications").offset().top -140
    }, 1000);
});

$(".POV-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#POV").offset().top -140
    }, 1000);
});

$(window).on("scroll", function () {
   if ($(this).scrollTop() > 90) {
      $('#navigation').removeClass('hidden');
   } else {
      $('#navigation').addClass('hidden');
}});

$(document).scroll(function() {
    var scroll_top = $(document).scrollTop(); 
    var purpose_top = $('#purpose').position().top -500;
    var questions_top = $('#questions').position().top -500;
    var information_top = $('#information').position().top -500;
    var concepts_top = $('#concepts').position().top -500;
    var assumptions_top = $('#assumptions').position().top -500;
    var Inferences_top = $('#Inferences').position().top -500;
    var Implications_top = $('#Implications').position().top -500;
    var POV_top = $('#POV').position().top -500;
    
    
/*Purpose*/
    if(scroll_top > purpose_top && scroll_top < questions_top) {
        $('.purpose-scroll').removeClass('default');
        $('.purpose-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > questions_top < purpose_top ) {
       $('.purpose-scroll a').removeClass('side-nav-highlight');
       $('.purpose-scroll').addClass('default');
    }
/*questions*/    
    if(scroll_top > questions_top && scroll_top < information_top) {
        $('.questions-scroll').removeClass('default');
        $('.questions-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > information_top < questions_top ) {
       $('.questions-scroll a').removeClass('side-nav-highlight');
       $('.questions-scroll').addClass('default');
    }
/*information*/     
    if(scroll_top > information_top && scroll_top < concepts_top) {
        $('.information-scroll').removeClass('default');
        $('.information-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > concepts_top < information_top ) {
       $('.information-scroll a').removeClass('side-nav-highlight');
       $('.information-scroll').addClass('default');
    }
    
/*concepts*/     
    if(scroll_top > concepts_top && scroll_top < assumptions_top) {
        $('.concepts-scroll').removeClass('default');
        $('.concepts-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > assumptions_top < concepts_top ) {
       $('.concepts-scroll a').removeClass('side-nav-highlight');
       $('.concepts-scroll').addClass('default');
    }
    
/*assumptions*/     
    if(scroll_top > assumptions_top && scroll_top < Inferences_top) {
        $('.assumptions-scroll').removeClass('default');
        $('.assumptions-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > Inferences_top < assumptions_top ) {
       $('.assumptions-scroll a').removeClass('side-nav-highlight');
       $('.assumptions-scroll').addClass('default');
    }
    
/*Inferences*/     
   if(scroll_top > Inferences_top && scroll_top < Implications_top) {
        $('.Inferences-scroll').removeClass('default');
        $('.Inferences-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > Implications_top < Inferences_top ) {
       $('.Inferences-scroll a').removeClass('side-nav-highlight');
       $('.Inferences-scroll').addClass('default');
    }
    
/*Implications*/     
 if(scroll_top > Implications_top && scroll_top < POV_top) {
        $('.Implications-scroll').removeClass('default');
        $('.Implications-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top > Inferences_top < POV_top ) {
       $('.Implications-scroll a').removeClass('side-nav-highlight');
       $('.Implications-scroll').addClass('default');
    }    
   
/*POV*/     
    if(scroll_top > POV_top) {
        $('.POV-scroll').removeClass('default');
        $('.assumptions-scroll a').addClass('side-nav-highlight');
    } else if( scroll_top < POV_top ) {
       $('.POV-scroll a').removeClass('side-nav-highlight');
       $('.POV-scroll').addClass('default');
    }    
    
    
    
    
    
});





$(document).ready(function() {
      $('#navigation').addClass('hidden');
});