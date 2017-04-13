var h=displayDate.format('h a');



function checkOfferingDate() {
    var x = (localStorage.getItem("storageName"));
    switch (x) {
        case "January 31st":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering"; 
            break;
        case "Febuary 28th":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering"; 
            break;    
        case "March 31st":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering, Sin Offering"; 
            break;
        case "April 30th":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering";
            break;
        case "May 31st":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering";
            break;
        case "June 30th":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering, Sin Offering";
            break; 
        case "July 31st":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering";
            break;
        case "August 31st":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering";
            break;
        case "September 30th":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering, Sin Offering";
            break; 
        case "October 31st":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering";
            break;
        case "November 30th":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering";
            break;
        case "December 31st":
            document.getElementById("more-offerings").innerHTML = ", Peace Offering, Sin Offering, Trespass Offering";
            break;
        default:
         document.getElementById("more-offerings").innerHTML = "";
    }
}

function checkPrayerDate() {
    var d = (localStorage.getItem("theDay"));
    if (d ==="Sunday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Other Christians</b>";
        document.getElementById("sunday-offerings").innerHTML = ", Grain Offering"; 
     };
    
    if (d ==="Monday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Family / Relatives</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
     };
    
    if (d ==="Tuesday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Friends / Acquaintances</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
     };
    
    if (d ==="Wednesday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Leaders</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
    }; 
    
    if (d ==="Thursday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for the Suffering</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
    };
    
    if (d ==="Friday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Enemies</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
    };
    
    if (d ==="Saturday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Needs</b>"; 
        document.getElementById("sunday-offerings").innerHTML = "";
      };   
}

switch (h) {
    case "3 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "4 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;    
    case "5 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "6 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "7 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "8 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break; 
    case "9 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "10 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "11 pm":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break; 
    case "12 am":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "1 am":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;
    case "2 am":
        $("#morning").insertAfter("#evening");
        $("#morning").addClass("buffer");
        $("#evening").removeClass("buffer");
        break;    
        
    default:
        $("#evening").insertAfter("#morning");
        $("#morning").removeClass("buffer");
        $("#evening").addClass("buffer");
}