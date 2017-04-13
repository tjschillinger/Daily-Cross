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

function checkAuthorgDate() {
    var x = (localStorage.getItem("storageName"));
    switch (x) {
    case "April 1st":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
    
    case "April 2nd":
            document.getElementById("todays-author").innerHTML = "God's Eternal Nature"; 
            break;
    
    case "April 3rd":
            document.getElementById("todays-author").innerHTML = "Solomon's Words"; 
            break;
    
    case "April 4th":
            document.getElementById("todays-author").innerHTML = "Solomon's Words"; 
            break;
    
    case "April 5th":
            document.getElementById("todays-author").innerHTML = "Solomon's Words"; 
            break;
    
    case "April 6th":
            document.getElementById("todays-author").innerHTML = "Solomon's Words"; 
            break;
    
    case "April 7th":
            document.getElementById("todays-author").innerHTML = "Solomon's Words"; 
            break;
    
    case "April 8th":
            document.getElementById("todays-author").innerHTML = "Solomon's Words"; 
            break;

        case "April 9th":
            document.getElementById("todays-author").innerHTML = "God's Name, El Qanno"; 
            break;
        
        case "April 10th":
            document.getElementById("todays-author").innerHTML = "Isaiah's Words"; 
            break;
        
        case "April 11th":
            document.getElementById("todays-author").innerHTML = "Isaiah's Words"; 
            break;
        
        case "April 12th":
            document.getElementById("todays-author").innerHTML = "Isaiah's Words"; 
            break;
            
        case "April 13th":
            document.getElementById("todays-author").innerHTML = "Isaiah's Words"; 
            break;
        case "April 14th":
            document.getElementById("todays-author").innerHTML = "Isaiah's Words"; 
            break;
        case "April 15th":
            document.getElementById("todays-author").innerHTML = "Isaiah's Words"; 
            break; 
            
        case "April 16th":
            document.getElementById("todays-author").innerHTML = "God's Spiritual Nature"; 
            break;
            
        case "April 17th":
            document.getElementById("todays-author").innerHTML = "Jeremiah's Words"; 
            break;
        case "April 18th":
            document.getElementById("todays-author").innerHTML = "Jeremiah's Words"; 
            break;
        case "April 19th":
            document.getElementById("todays-author").innerHTML = "Jeremiah's Words"; 
            break;
        case "April 20th":
            document.getElementById("todays-author").innerHTML = "Jeremiah's Words"; 
            break; 
        case "April 21st":
            document.getElementById("todays-author").innerHTML = "Jeremiah's Words"; 
            break;  
        case "April 22nd":
            document.getElementById("todays-author").innerHTML = "Jeremiah's Words"; 
            break;  
        case "April 23rd":
            document.getElementById("todays-author").innerHTML = "God's Name, Elohe Israel"; 
            break;   
        
        case "April 24th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        case "April 25th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
        case "April 26th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        case "April 27th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        case "April 28th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
        case "April 29th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
        case "April 30th":
            document.getElementById("todays-author").innerHTML = "God's Omnipresent Nature"; 
            break;    
    }
}
    