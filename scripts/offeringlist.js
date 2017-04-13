    var d = (localStorage.getItem("theDay"));
    var x = (localStorage.getItem("storageName"));


    if (d ==="Sunday"){
        $("#grain-offering").removeClass("hidden");
        $("#grain-offering").removeClass("buffer");
        $("#grain-offering").addClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
    }else{
        $("#grain-offering").addClass("hidden");
    };



switch (x) {
    case "January 31st":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;
    case "Febuary 28th":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;    
    case "March 31st":
        $("#sin-offering").removeClass("buffer");
        $("#sin-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#trespass-offering").addClass("hidden");
        break;
    case "April 30th":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;
    case "May 31st":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;
    case "June 30th":
        $("#sin-offering").removeClass("buffer");
        $("#sin-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#trespass-offering").addClass("hidden");
        break; 
    case "July 31st":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;
    case "August 31st":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;
    case "September 30th":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").removeClass("buffer");
        $("#sin-offering").addClass("little-buff");
        
        $("#trespass-offering").addClass("hidden");
        break; 
    case "October 31st":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;
    case "November 30th":
        $("#peace-offering").removeClass("buffer");
        $("#peace-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        break;
    case "December 31st":
        $("#trespass-offering").removeClass("buffer");
        $("#trespass-offering").addClass("little-buff");
        
        $("#grain-offering").addClass("buffer");
        $("#grain-offering").removeClass("little-buff");
        
        $("#burnt-offering").addClass("buffer");
        $("#burnt-offering").removeClass("little-buff");
        break;    
        
    default:
        $("#peace-offering").addClass("hidden");
        $("#sin-offering").addClass("hidden");
        $("#trespass-offering").addClass("hidden");
        
}
