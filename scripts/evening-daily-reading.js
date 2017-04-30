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
        document.getElementById("prayer-home").innerHTML = "Step 5: <b>Pray for Other Christians</b>";
        document.getElementById("sunday-offerings").innerHTML = ", Grain Offering"; 
     };
    
    if (d ==="Monday"){
        document.getElementById("prayer-home").innerHTML = "Step 5: <b>Pray for Your Family</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
     };
    
    if (d ==="Tuesday"){
        document.getElementById("prayer-home").innerHTML = "Step 5: <b>Pray for Your Friends</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
     };
    
    if (d ==="Wednesday"){
        document.getElementById("prayer-home").innerHTML = "Step 5: <b>Pray for Your Leaders</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
    }; 
    
    if (d ==="Thursday"){
        document.getElementById("prayer-home").innerHTML = "Step 5: <b>Pray for the Suffering</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
    };
    
    if (d ==="Friday"){
        document.getElementById("prayer-home").innerHTML = "Step 5: <b>Pray for Your Enemies</b>";
        document.getElementById("sunday-offerings").innerHTML = "";
    };
    
    if (d ==="Saturday"){
        document.getElementById("prayer-home").innerHTML = "Step 5: <b>Pray for Your Needs</b>"; 
        document.getElementById("sunday-offerings").innerHTML = "";
      };   
}

switch (h) {
    case "3 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        
        break;
    case "4 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;    
    case "5 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;
    case "6 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;
    case "7 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;
    case "8 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break; 
    case "9 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;
    case "10 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;
    case "11 pm":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break; 
    case "12 am":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;
    case "1 am":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;
    case "2 am":
        $("#morning").addClass("hidden");
        $("#evening").removeClass("hidden");
        $("#evening-toggle").addClass("toggle-active");
        break;    
        
    default:
        $("#morning").removeClass("hidden");
        $("#evening").addClass("hidden");
        $("#morning-toggle").addClass("toggle-active");
}

function checkAuthorgDate() {
    var x = (localStorage.getItem("storageName"));
    switch (x) {
        case "January 1st":
                document.getElementById("todays-author").innerHTML = "God's Name, Alpha"; 
                break;

        case "January 2nd":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "January 3rd":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "January 4th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "January 5th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "January 6th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "January 7th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "January 8th":
                document.getElementById("todays-author").innerHTML = "God's Living Nature"; 
                break;

        case "January 9th":
            document.getElementById("todays-author").innerHTML = "God's Creation"; 
            break;
        
        case "January 10th":
            document.getElementById("todays-author").innerHTML = "God's Creation"; 
            break;
        
        case "January 11th":
            document.getElementById("todays-author").innerHTML = "God's Creation"; 
            break;
        
        case "January 12th":
            document.getElementById("todays-author").innerHTML = "God's Creation"; 
            break;
            
        case "January 13th":
            document.getElementById("todays-author").innerHTML = "God's Creation"; 
            break;
            
        case "January 14th":
            document.getElementById("todays-author").innerHTML = "God's Creation"; 
            break;
            
        case "January 15th":
            document.getElementById("todays-author").innerHTML = "God's Name, Adonai"; 
            break; 
            
        case "January 16th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "January 17th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "January 18th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "January 19th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "January 20th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break; 
            
        case "January 21st":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible";
            break; 
            
        case "January 22nd":
            document.getElementById("todays-author").innerHTML = "God's Oneness"; 
            break; 
            
        case "January 23rd":
            document.getElementById("todays-author").innerHTML = "Moses' Words"; 
            break;   
        
        case "January 24th":
            document.getElementById("todays-author").innerHTML = "Moses' Words"; 
            break;
            
        case "January 25th":
            document.getElementById("todays-author").innerHTML = "Moses' Words"; 
            break; 
            
        case "January 26th":
            document.getElementById("todays-author").innerHTML = "Moses' Words"; 
            break;
            
        case "January 27th":
            document.getElementById("todays-author").innerHTML = "Moses' Words"; 
            break;
            
        case "January 28th":
            document.getElementById("todays-author").innerHTML = "Moses' Words"; 
            break; 
            
        case "January 29th":
            document.getElementById("todays-author").innerHTML = "God's Name, Elohim"; 
            break; 
            
        case "January 30th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "January 31st":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
            
/*February*/             
     case "February 1st":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "February 2nd":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "February 3rd":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "February 4th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "February 5th":
                document.getElementById("todays-author").innerHTML = "God's Immutable Nature"; 
                break;

        case "February 6th":
                document.getElementById("todays-author").innerHTML = "Joshua's Words"; 
                break;

        case "February 7th":
                document.getElementById("todays-author").innerHTML = "Joshua's Words"; 
                break;

        case "February 8th":
                document.getElementById("todays-author").innerHTML = "Joshua's Words"; 
                break;

        case "February 9th":
            document.getElementById("todays-author").innerHTML = "Joshua's Words"; 
            break;
        
        case "February 10th":
            document.getElementById("todays-author").innerHTML = "Joshua's Words"; 
            break;
        
        case "February 11th":
            document.getElementById("todays-author").innerHTML = "Joshua's Words"; 
            break;
        
        case "February 12th":
            document.getElementById("todays-author").innerHTML = "God's Name, El Shaddai"; 
            break;
            
        case "February 13th":
            document.getElementById("todays-author").innerHTML = "Samuel's Words"; 
            break;
            
        case "February 14th":
            document.getElementById("todays-author").innerHTML = "Samuel's Words"; 
            break;
            
        case "February 15th":
            document.getElementById("todays-author").innerHTML = "Samuel's Words"; 
            break; 
            
        case "February 16th":
            document.getElementById("todays-author").innerHTML = "Samuel's Words"; 
            break;
            
        case "February 17th":
            document.getElementById("todays-author").innerHTML = "Samuel's Words"; 
            break;
            
        case "February 18th":
            document.getElementById("todays-author").innerHTML = "Samuel's Words"; 
            break;
            
        case "February 19th":
            document.getElementById("todays-author").innerHTML = "God's Infinite Nature"; 
            break;
            
        case "February 20th":
            document.getElementById("todays-author").innerHTML = "Ezra's Words"; 
            break; 
            
        case "February 21st":
            document.getElementById("todays-author").innerHTML = "Ezra's Words";
            break; 
            
        case "February 22nd":
            document.getElementById("todays-author").innerHTML = "Ezra's Words"; 
            break; 
            
        case "February 23rd":
            document.getElementById("todays-author").innerHTML = "Ezra's Words"; 
            break;   
        
        case "February 24th":
            document.getElementById("todays-author").innerHTML = "Ezra's Words"; 
            break;
            
        case "February 25th":
            document.getElementById("todays-author").innerHTML = "Ezra's Words"; 
            break; 
            
        case "February 26th":
            document.getElementById("todays-author").innerHTML = "God's Name, El Olam"; 
            break;
            
        case "February 27th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "February 28th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;        
/*March*/     
     case "March 1st":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "March 2nd":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "March 3rd":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "March 4th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "March 5th":
                document.getElementById("todays-author").innerHTML = "God's Truthful Nature"; 
                break;

        case "March 6th":
                document.getElementById("todays-author").innerHTML = "Mordecai's Words"; 
                break;

        case "March 7th":
                document.getElementById("todays-author").innerHTML = "Mordecai's Words"; 
                break;

        case "March 8th":
                document.getElementById("todays-author").innerHTML = "Mordecai's Words"; 
                break;

        case "March 9th":
            document.getElementById("todays-author").innerHTML = "Mordecai's Words"; 
            break;
        
        case "March 10th":
            document.getElementById("todays-author").innerHTML = "Mordecai's Words"; 
            break;
        
        case "March 11th":
            document.getElementById("todays-author").innerHTML = "Mordecai's Words"; 
            break;
        
        case "March 12th":
            document.getElementById("todays-author").innerHTML = "God's Name, El Elyon"; 
            break;
            
        case "March 13th":
            document.getElementById("todays-author").innerHTML = "Job's Words"; 
            break;
            
        case "March 14th":
            document.getElementById("todays-author").innerHTML = "Job's Words"; 
            break;
            
        case "March 15th":
            document.getElementById("todays-author").innerHTML = "Job's Words"; 
            break; 
            
        case "March 16th":
            document.getElementById("todays-author").innerHTML = "Job's Words"; 
            break;
            
        case "March 17th":
            document.getElementById("todays-author").innerHTML = "Job's Words"; 
            break;
            
        case "March 18th":
            document.getElementById("todays-author").innerHTML = "Job's Words"; 
            break;
            
        case "March 19th":
            document.getElementById("todays-author").innerHTML = "God's Faithfulness"; 
            break;
            
        case "March 20th":
            document.getElementById("todays-author").innerHTML = "David's Words"; 
            break; 
            
        case "March 21st":
            document.getElementById("todays-author").innerHTML = "David's Words"; 
            break;
            
        case "March 22nd":
            document.getElementById("todays-author").innerHTML = "David's Words"; 
            break; 
            
        case "March 23rd":
            document.getElementById("todays-author").innerHTML = "David's Words"; 
            break;   
        
        case "March 24th":
            document.getElementById("todays-author").innerHTML = "David's Words"; 
            break;
            
        case "March 25th":
            document.getElementById("todays-author").innerHTML = "David's Words"; 
            break;
            
        case "March 26th":
            document.getElementById("todays-author").innerHTML = "God's Name, El Qodash"; 
            break;
            
        case "March 27th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "March 28th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "March 29th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
            
        case "March 30th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;        
        
        case "March 31st":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;    
            
/*April*/            
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
            
/*May*/             
      case "May 1st":
                document.getElementById("todays-author").innerHTML = "Ezekiel's Words"; 
                break;

        case "May 2nd":
                document.getElementById("todays-author").innerHTML = "Ezekiel's Words"; 
                break;

        case "May 3rd":
                document.getElementById("todays-author").innerHTML = "Ezekiel's Words"; 
                break;

        case "May 4th":
                document.getElementById("todays-author").innerHTML = "Ezekiel's Words"; 
                break;

        case "May 5th":
                document.getElementById("todays-author").innerHTML = "Ezekiel's Words"; 
                break;

        case "May 6th":
                document.getElementById("todays-author").innerHTML = "Ezekiel's Words"; 
                break;

        case "May 7th":
                document.getElementById("todays-author").innerHTML = "God's Name, El Roi"; 
                break;

        case "May 8th":
                document.getElementById("todays-author").innerHTML = "God's Providence"; 
                break;

        case "May 9th":
            document.getElementById("todays-author").innerHTML = "God's Providence"; 
            break;
        
        case "May 10th":
            document.getElementById("todays-author").innerHTML = "God's Providence"; 
            break;
        
        case "May 11th":
            document.getElementById("todays-author").innerHTML = "God's Providence"; 
            break;
        
        case "May 12th":
            document.getElementById("todays-author").innerHTML = "God's Providence"; 
            break;
            
        case "May 13th":
            document.getElementById("todays-author").innerHTML = "God's Providence"; 
            break;
            
        case "May 14th":
            document.getElementById("todays-author").innerHTML = "God's Omniscient Nature"; 
            break;
            
        case "May 15th":
            document.getElementById("todays-author").innerHTML = "Daniel's Words"; 
            break; 
            
        case "May 16th":
            document.getElementById("todays-author").innerHTML = "Daniel's Words"; 
            break;
            
        case "May 17th":
            document.getElementById("todays-author").innerHTML = "Daniel's Words"; 
            break;
            
        case "May 18th":
            document.getElementById("todays-author").innerHTML = "Daniel's Words"; 
            break;
            
        case "May 19th":
            document.getElementById("todays-author").innerHTML = "Daniel's Words"; 
            break;
            
        case "May 20th":
            document.getElementById("todays-author").innerHTML = "Daniel's Words"; 
            break; 
            
        case "May 21st":
            document.getElementById("todays-author").innerHTML = "God's Name, El Gadol/Nora";
            break; 
            
        case "May 22nd":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
            
        case "May 23rd":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;   
        
        case "May 24th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "May 25th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
            
        case "May 26th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "May 27th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "May 28th":
            document.getElementById("todays-author").innerHTML = "God's Omnipotent Nature"; 
            break; 
            
        case "May 29th":
            document.getElementById("todays-author").innerHTML = "Hosea's Words"; 
            break; 
            
        case "May 30th":
            document.getElementById("todays-author").innerHTML = "Hosea's Words"; 
            break;
            
        case "May 31st":
            document.getElementById("todays-author").innerHTML = "Hosea's Words"; 
            break;
            
/*June*/             
      case "June 1st":
                document.getElementById("todays-author").innerHTML = "Hosea's Words"; 
                break;

        case "June 2nd":
                document.getElementById("todays-author").innerHTML = "Hosea's Words"; 
                break;

        case "June 3rd":
                document.getElementById("todays-author").innerHTML = "Hosea's Words"; 
                break;

        case "June 4th":
                document.getElementById("todays-author").innerHTML = "God's Name, El Chanun"; 
                break;

        case "June 5th":
                document.getElementById("todays-author").innerHTML = "Joel's Words"; 
                break;

        case "June 6th":
                document.getElementById("todays-author").innerHTML = "Joel's Words"; 
                break;

        case "June 7th":
                document.getElementById("todays-author").innerHTML = "Joel's Words"; 
                break;

        case "June 8th":
                document.getElementById("todays-author").innerHTML = "Joel's Words"; 
                break;

        case "June 9th":
            document.getElementById("todays-author").innerHTML = "Joel's Words"; 
            break;
        
        case "June 10th":
            document.getElementById("todays-author").innerHTML = "Joel's Words"; 
            break;
        
        case "June 11th":
            document.getElementById("todays-author").innerHTML = "God's Wisdom"; 
            break;
        
        case "June 12th":
            document.getElementById("todays-author").innerHTML = "Amos' Words"; 
            break;
            
        case "June 13th":
            document.getElementById("todays-author").innerHTML = "Amos' Words"; 
            break;
            
        case "June 14th":
            document.getElementById("todays-author").innerHTML = "Amos' Words"; 
            break;
            
        case "June 15th":
            document.getElementById("todays-author").innerHTML = "Amos' Words"; 
            break; 
            
        case "June 16th":
            document.getElementById("todays-author").innerHTML = "Amos' Words"; 
            break;
            
        case "June 17th":
            document.getElementById("todays-author").innerHTML = "Amos' Words"; 
            break;
            
        case "June 18th":
            document.getElementById("todays-author").innerHTML = "God's Name, El Neeman"; 
            break;
            
        case "June 19th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "June 20th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break; 
            
        case "June 21st":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible";
            break; 
            
        case "June 22nd":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break; 
            
        case "June 23rd":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;   
        
        case "June 24th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "June 25th":
            document.getElementById("todays-author").innerHTML = "God's Holiness"; 
            break; 
            
        case "June 26th":
            document.getElementById("todays-author").innerHTML = "Obadiah's Words"; 
            break;
            
        case "June 27th":
            document.getElementById("todays-author").innerHTML = "Obadiah's Words"; 
            break;
            
        case "June 28th":
            document.getElementById("todays-author").innerHTML = "Obadiah's Words"; 
            break; 
            
        case "June 29th":
            document.getElementById("todays-author").innerHTML = "Obadiah's Words"; 
            break; 
            
        case "June 30th":
            document.getElementById("todays-author").innerHTML = "Obadiah's Words"; 
            break;
            
/*July*/             
       case "July 1st":
                document.getElementById("todays-author").innerHTML = "Obadiah's Words"; 
                break;

        case "July 2nd":
                document.getElementById("todays-author").innerHTML = "God's Name, El Chai"; 
                break;

        case "July 3rd":
                document.getElementById("todays-author").innerHTML = "Jonah's Words"; 
                break;

        case "July 4th":
                document.getElementById("todays-author").innerHTML = "Jonah's Words"; 
                break;

        case "July 5th":
                document.getElementById("todays-author").innerHTML = "Jonah's Words"; 
                break;

        case "July 6th":
                document.getElementById("todays-author").innerHTML = "Jonah's Words"; 
                break;

        case "July 7th":
                document.getElementById("todays-author").innerHTML = "Jonah's Words"; 
                break;

        case "July 8th":
                document.getElementById("todays-author").innerHTML = "Jonah's Words"; 
                break;

        case "July 9th":
            document.getElementById("todays-author").innerHTML = "God's Just Nature"; 
            break;
        
        case "July 10th":
            document.getElementById("todays-author").innerHTML = "Micah's Words"; 
            break;
        
        case "July 11th":
            document.getElementById("todays-author").innerHTML = "Micah's Words"; 
            break;
        
        case "July 12th":
            document.getElementById("todays-author").innerHTML = "Micah's Words"; 
            break;
            
        case "July 13th":
            document.getElementById("todays-author").innerHTML = "Micah's Words"; 
            break;
            
        case "July 14th":
            document.getElementById("todays-author").innerHTML = "Micah's Words"; 
            break;
            
        case "July 15th":
            document.getElementById("todays-author").innerHTML = "Micah's Words"; 
            break; 
            
        case "July 16th":
            document.getElementById("todays-author").innerHTML = "God's Name, El Sabaoth"; 
            break;
            
        case "July 17th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "July 18th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "July 19th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "July 20th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
            
        case "July 21st":
            document.getElementById("todays-author").innerHTML = "Jesus' Words";
            break; 
            
        case "July 22nd":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break; 
            
        case "July 23rd":
            document.getElementById("todays-author").innerHTML = "God's Goodness"; 
            break;   
        
        case "July 24th":
            document.getElementById("todays-author").innerHTML = "Nahum's Words"; 
            break;
            
        case "July 25th":
            document.getElementById("todays-author").innerHTML = "Nahum's Words"; 
            break; 
            
        case "July 26th":
            document.getElementById("todays-author").innerHTML = "Nahum's Words"; 
            break;
            
        case "July 27th":
            document.getElementById("todays-author").innerHTML = "Nahum's Words"; 
            break;
            
        case "July 28th":
            document.getElementById("todays-author").innerHTML = "Nahum's Words"; 
            break; 
            
        case "July 29th":
            document.getElementById("todays-author").innerHTML = "Nahum's Words"; 
            break; 
            
        case "July 30th":
            document.getElementById("todays-author").innerHTML = "God's Name, Yahweh"; 
            break; 
            
        case "July 31st":
            document.getElementById("todays-author").innerHTML = "Habakkuk's Words"; 
            break; 
            
/*August*/             
      case "August 1st":
                document.getElementById("todays-author").innerHTML = "Habakkuk's Words"; 
                break;

        case "August 2nd":
                document.getElementById("todays-author").innerHTML = "Habakkuk's Words"; 
                break;

        case "August 3rd":
                document.getElementById("todays-author").innerHTML = "Habakkuk's Words"; 
                break;

        case "August 4th":
                document.getElementById("todays-author").innerHTML = "Habakkuk's Words"; 
                break;

        case "August 5th":
                document.getElementById("todays-author").innerHTML = "Habakkuk's Words"; 
                break;

        case "August 6th":
                document.getElementById("todays-author").innerHTML = "God's Loving Nature"; 
                break;

        case "August 7th":
                document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
                break;

        case "August 8th":
                document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
                break;

        case "August 9th":
            document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
            break;
        
        case "August 10th":
            document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
            break;
        
        case "August 11th":
            document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
            break;
        
        case "August 12th":
            document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
            break;
            
        case "August 13th":
            document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Jireh"; 
            break;
            
        case "August 14th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "August 15th":
            document.getElementById("todays-author").innerHTML = "Jesus'  Words"; 
            break; 
            
        case "August 16th":
            document.getElementById("todays-author").innerHTML = "Jesus'  Words"; 
            break;
            
        case "August 17th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "August 18th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "August 19th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "August 20th":
            document.getElementById("todays-author").innerHTML = "God's Gracious Nature"; 
            break; 
            
        case "August 21st":
            document.getElementById("todays-author").innerHTML = "Haggai's Words";
            break; 
            
        case "August 22nd":
            document.getElementById("todays-author").innerHTML = "Haggai's Words"; 
            break; 
            
        case "August 23rd":
            document.getElementById("todays-author").innerHTML = "Haggai's Words"; 
            break;   
        
        case "August 24th":
            document.getElementById("todays-author").innerHTML = "Haggai's Words"; 
            break;
            
        case "August 25th":
            document.getElementById("todays-author").innerHTML = "Haggai's Words"; 
            break; 
            
        case "August 26th":
            document.getElementById("todays-author").innerHTML = "Haggai's Words"; 
            break;
            
        case "August 27th":
            document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Rapha"; 
            break;
            
        case "August 28th":
            document.getElementById("todays-author").innerHTML = "God's Redemption"; 
            break; 
            
        case "August 29th":
            document.getElementById("todays-author").innerHTML = "God's Redemption"; 
            break; 
            
        case "August 30th":
            document.getElementById("todays-author").innerHTML = "God's Redemption"; 
            break; 
            
        case "August 31st":
            document.getElementById("todays-author").innerHTML = "God's Redemption"; 
            break;
            
/*September*/             
      case "September 1st":
                document.getElementById("todays-author").innerHTML = "God's Redemption"; 
                break;

        case "September 2nd":
                document.getElementById("todays-author").innerHTML = "God's Redemption"; 
                break;

        case "September 3rd":
                document.getElementById("todays-author").innerHTML = "God's Merciful Nature"; 
                break;

        case "September 4th":
                document.getElementById("todays-author").innerHTML = "Zecharia's Words"; 
                break;

        case "September 5th":
                document.getElementById("todays-author").innerHTML = "Zecharia's Words"; 
                break;

        case "September 6th":
                document.getElementById("todays-author").innerHTML = "Zecharia's Words"; 
                break;

        case "September 7th":
                document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
                break;

        case "September 8th":
                document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
                break;

        case "September 9th":
            document.getElementById("todays-author").innerHTML = "Zechariah's Words"; 
            break;
        
        case "September 10th":
            document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Nissi"; 
            break;
        
        case "September 11th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "September 12th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "September 13th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "September 14th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "September 15th":
            document.getElementById("todays-author").innerHTML = "Jesus'  Words"; 
            break; 
            
        case "September 16th":
            document.getElementById("todays-author").innerHTML = "Jesus'  Words"; 
            break;
            
        case "September 17th":
            document.getElementById("todays-author").innerHTML = "God's Patient Nature"; 
            break;
            
        case "September 18th":
            document.getElementById("todays-author").innerHTML = "Malachi's Words"; 
            break;
            
        case "September 19th":
            document.getElementById("todays-author").innerHTML = "Malachi's Words"; 
            break;
            
        case "September 20th":
            document.getElementById("todays-author").innerHTML = "Malachi's Words"; 
            break; 
            
        case "September 21st":
            document.getElementById("todays-author").innerHTML = "Malachi's Words";
            break; 
            
        case "September 22nd":
            document.getElementById("todays-author").innerHTML = "Malachi's Words"; 
            break; 
            
        case "September 23rd":
            document.getElementById("todays-author").innerHTML = "Malachi's Words"; 
            break;   
        
        case "September 24th":
            document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Qadash"; 
            break;
            
        case "September 25th":
            document.getElementById("todays-author").innerHTML = "Matthew's Words"; 
            break; 
            
        case "September 26th":
            document.getElementById("todays-author").innerHTML = "Matthew's Words"; 
            break;
            
        case "September 27th":
            document.getElementById("todays-author").innerHTML = "Matthew's Words"; 
            break;
            
        case "September 28th":
            document.getElementById("todays-author").innerHTML = "Matthew's Words"; 
            break; 
            
        case "September 29th":
            document.getElementById("todays-author").innerHTML = "Matthew's Words"; 
            break; 
            
        case "September 30th":
            document.getElementById("todays-author").innerHTML = "Matthew's Words"; 
            break;

/*October*/             
      case "October 1st":
                document.getElementById("todays-author").innerHTML = "God's Sovereign Nature"; 
                break;

        case "October 2nd":
                document.getElementById("todays-author").innerHTML = "Mark's Words"; 
                break;

        case "October 3rd":
                document.getElementById("todays-author").innerHTML = "Mark's Words"; 
                break;

        case "October 4th":
                document.getElementById("todays-author").innerHTML = "Mark's Words"; 
                break;

        case "October 5th":
                document.getElementById("todays-author").innerHTML = "Mark's Words"; 
                break;

        case "October 6th":
                document.getElementById("todays-author").innerHTML = "Mark's Words"; 
                break;

        case "October 7th":
                document.getElementById("todays-author").innerHTML = "Mark's Words"; 
                break;

        case "October 8th":
                document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Rohi"; 
                break;

        case "October 9th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "October 10th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "October 11th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "October 12th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "October 13th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "October 14th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
            
        case "October 15th":
            document.getElementById("todays-author").innerHTML = "God's Immense Nature"; 
            break; 
            
        case "October 16th":
            document.getElementById("todays-author").innerHTML = "Luke's  Words"; 
            break;
            
        case "October 17th":
            document.getElementById("todays-author").innerHTML = "Luke's  Words"; 
            break;
            
        case "October 18th":
            document.getElementById("todays-author").innerHTML = "Luke's Words"; 
            break;
            
        case "October 19th":
            document.getElementById("todays-author").innerHTML = "Luke's Words"; 
            break;
            
        case "October 20th":
            document.getElementById("todays-author").innerHTML = "Luke's Words"; 
            break; 
            
        case "October 21st":
            document.getElementById("todays-author").innerHTML = "Luke's Words";
            break; 
            
        case "October 22nd":
            document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Tsidkenu"; 
            break; 
            
        case "October 23rd":
            document.getElementById("todays-author").innerHTML = "John's Words"; 
            break;   
        
        case "October 24th":
            document.getElementById("todays-author").innerHTML = "John's Words"; 
            break;
            
        case "October 25th":
            document.getElementById("todays-author").innerHTML = "John's Words"; 
            break; 
            
        case "October 26th":
            document.getElementById("todays-author").innerHTML = "John's Words"; 
            break;
            
        case "October 27th":
            document.getElementById("todays-author").innerHTML = "John's Words"; 
            break;
            
        case "October 28th":
            document.getElementById("todays-author").innerHTML = "John's Words"; 
            break; 
            
        case "October 29th":
            document.getElementById("todays-author").innerHTML = "God's Pure Nature"; 
            break; 
            
        case "October 30th":
            document.getElementById("todays-author").innerHTML = "Paul's Words"; 
            break;
        
        case "October 31st":
            document.getElementById("todays-author").innerHTML = "Paul's Words"; 
            break;

/*November*/             
      case "November 1st":
                document.getElementById("todays-author").innerHTML = "Paul's Words"; 
                break;

        case "November 2nd":
                document.getElementById("todays-author").innerHTML = "Paul's Words"; 
                break;

        case "November 3rd":
                document.getElementById("todays-author").innerHTML = "Paul's Words"; 
                break;

        case "November 4th":
                document.getElementById("todays-author").innerHTML = "Paul's Words"; 
                break;

        case "November 5th":
                document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Shalom"; 
                break;

        case "November 6th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "November 7th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "November 8th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "November 9th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "November 10th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "November 11th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "November 12th":
            document.getElementById("todays-author").innerHTML = "God's Hateful Nature"; 
            break;
            
        case "November 13th":
            document.getElementById("todays-author").innerHTML = "Hebrews' Words"; 
            break;
            
        case "November 14th":
            document.getElementById("todays-author").innerHTML = "Hebrews' Words"; 
            break;
            
        case "November 15th":
            document.getElementById("todays-author").innerHTML = "Hebrews' Words"; 
            break; 
            
        case "November 16th":
            document.getElementById("todays-author").innerHTML = "Hebrews' Words"; 
            break;
            
        case "November 17th":
            document.getElementById("todays-author").innerHTML = "Hebrews' Words"; 
            break;
            
        case "November 18th":
            document.getElementById("todays-author").innerHTML = "Hebrews' Words"; 
            break;
            
        case "November 19th":
            document.getElementById("todays-author").innerHTML = "God's Name, Yahweh Shammah"; 
            break;
            
        case "November 20th":
            document.getElementById("todays-author").innerHTML = "James' Words"; 
            break; 
            
        case "November 21st":
            document.getElementById("todays-author").innerHTML = "James' Words";
            break; 
            
        case "November 22nd":
            document.getElementById("todays-author").innerHTML = "James' Words"; 
            break; 
            
        case "November 23rd":
            document.getElementById("todays-author").innerHTML = "James' Words"; 
            break;   
        
        case "November 24th":
            document.getElementById("todays-author").innerHTML = "James' Words"; 
            break;
            
        case "November 25th":
            document.getElementById("todays-author").innerHTML = "James' Words"; 
            break; 
            
        case "November 26th":
            document.getElementById("todays-author").innerHTML = "God's Happy Nature"; 
            break;
            
        case "November 27th":
            document.getElementById("todays-author").innerHTML = "Peter's Words"; 
            break;
            
        case "November 28th":
            document.getElementById("todays-author").innerHTML = "Peter's Words"; 
            break; 
            
        case "November 29th":
            document.getElementById("todays-author").innerHTML = "Peter's Word"; 
            break; 
            
        case "November 30th":
            document.getElementById("todays-author").innerHTML = "Peter's Words"; 
            break;

/*December*/             
      case "December 1st":
                document.getElementById("todays-author").innerHTML = "Peter's Words"; 
                break;

        case "December 2nd":
                document.getElementById("todays-author").innerHTML = "Peter's Words"; 
                break;

        case "December 3rd":
                document.getElementById("todays-author").innerHTML = "God's Name, Immanuel"; 
                break;

        case "December 4th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "December 5th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "December 6th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "December 7th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "December 8th":
                document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
                break;

        case "December 9th":
            document.getElementById("todays-author").innerHTML = "Jesus' Words"; 
            break;
        
        case "December 10th":
            document.getElementById("todays-author").innerHTML = "God's Immortal Nature"; 
            break;
        
        case "December 11th":
            document.getElementById("todays-author").innerHTML = "Jude's Words"; 
            break;
        
        case "December 12th":
            document.getElementById("todays-author").innerHTML = "Jude's Words"; 
            break;
            
        case "December 13th":
            document.getElementById("todays-author").innerHTML = "Jude's Words"; 
            break;
            
        case "December 14th":
            document.getElementById("todays-author").innerHTML = "Jude's Words"; 
            break;
            
        case "December 15th":
            document.getElementById("todays-author").innerHTML = "Jude's Words"; 
            break; 
            
        case "December 16th":
            document.getElementById("todays-author").innerHTML = "Jude's Words"; 
            break;
            
        case "December 17th":
            document.getElementById("todays-author").innerHTML = "God's Name, Jesus"; 
            break;
            
        case "December 18th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "December 19th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;
            
        case "December 20th":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break; 
            
        case "December 21st":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible";
            break; 
            
        case "December 22nd":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break; 
            
        case "December 23rd":
            document.getElementById("todays-author").innerHTML = "Anywhere in the Bible"; 
            break;   
        
        case "December 24th":
            document.getElementById("todays-author").innerHTML = "God's Invisible Nature"; 
            break;
            
        case "December 25th":
            document.getElementById("todays-author").innerHTML = "God's Judgement"; 
            break; 
            
        case "December 26th":
            document.getElementById("todays-author").innerHTML = "God's Judgement"; 
            break;
            
        case "December 27th":
            document.getElementById("todays-author").innerHTML = "God's Judgement"; 
            break;
            
        case "December 28th":
            document.getElementById("todays-author").innerHTML = "God's Judgement"; 
            break; 
            
        case "December 29th":
            document.getElementById("todays-author").innerHTML = "God's Judgement"; 
            break; 
            
        case "December 30th":
            document.getElementById("todays-author").innerHTML = "God's Judgement"; 
            break;
            
        case "December 31st":
            document.getElementById("todays-author").innerHTML = "God's Name, Omega"; 
            break;    
            
    }
}
    