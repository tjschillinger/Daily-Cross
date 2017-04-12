    var a = moment().format('dddd');
    var b = moment().format('MMMM Do'); 
    
    if (a ==="Sunday"){
        $("#grain-offering").removeClass("hidden");
    }else{
        $("#grain-offering").addClass("hidden");
    };

switch (b) {
    case "January 31st":
        $("#peace-offering").removeClass("hidden");
        break;
    case "Febuary 28th":
        $("#peace-offering").removeClass("hidden");
        break;    
    case "March 31st":
        $("#peace-offering").removeClass("hidden");
        $("#sin-offering").removeClass("hidden");
        break;
    case "April 30th":
        $("#peace-offering").removeClass("hidden");
        break;
    case "May 31st":
        $("#peace-offering").removeClass("hidden");
        break;
    case "June 30th":
        $("#peace-offering").removeClass("hidden");
        $("#sin-offering").removeClass("hidden");
        break; 
    case "July 31st":
        $("#peace-offering").removeClass("hidden");
        break;
    case "August 31st":
        $("#peace-offering").removeClass("hidden");
        break;
    case "September 30th":
        $("#peace-offering").removeClass("hidden");
        $("#sin-offering").removeClass("hidden");
        break; 
    case "October 31st":
        $("#peace-offering").removeClass("hidden");
        break;
    case "November 30th":
        $("#peace-offering").removeClass("hidden");
        break;
    case "December 31st":
        $("#peace-offering").removeClass("hidden");
        $("#sin-offering").removeClass("hidden");
        $("#trespass-offering").removeClass("hidden");
        break;    
        
    default:
        $("#peace-offering").addClass("hidden");
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
}