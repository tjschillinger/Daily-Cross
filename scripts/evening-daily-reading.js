function checkPrayerDate() {
     var d = (localStorage.getItem("theDay"));
    if (d ==="Sunday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Other Christians</b>"; 
     };
    
    if (d ==="Monday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Family / Relatives</b>";
     };
    
    if (d ==="Tuesday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Friends / Acquaintances</b>";    
     };
    
    if (d ==="Wednesday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Leaders</b>";
    }; 
    
    if (d ==="Thursday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for the Suffering</b>";
    };
    
    if (d ==="Friday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Enemies</b>";
    };
    
    if (d ==="Saturday"){
        document.getElementById("prayer-home").innerHTML = "Act 5: <b>Pray for Your Needs</b>";   
      };   
}