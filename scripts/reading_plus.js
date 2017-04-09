var displayDate = moment();

$(".left-arrow").click(function(){
        
         $('#date').text(displayDate.add(-1, 'days').format('MMMM Do'));
    
        checkDate();
    
        var getInput = displayDate.format('MMMM Do');
        localStorage.setItem("storageName",getInput);
    
        window.name = displayDate.format('MMMM Do');
});

$(".right-arrow").click(function(){
    
    $('#date').text(displayDate.add(1, 'days').format('MMMM Do'));
    
    checkDate();
    
    var getInput = displayDate.format('MMMM Do');
    localStorage.setItem("storageName",getInput);
    
    window.name = displayDate.format('MMMM Do');
});

$( document ).ready(function() {
    if( window.name.length > 0){
            $('#date').text(window.name);
        } else{
            var displayDate = moment();
            window.name = displayDate.format('MMMM Do');
            $('#date').text(window.name);
            var getInput = displayDate.format('MMMM Do');
            localStorage.setItem("storageName",getInput);
        };
    
    checkDate();
});