var x = (localStorage.getItem("storageName"));

switch (x) {

/*January*/
    case "January 1st":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Alpha</b> (First) <a class='tooltip' onclick=''><span class='tooltiptext-2'>'I am the Alpha and the Omega, says the Lord God, who is, and who was, and who is to come, the Almighty.'</div></span>Rev 1:8</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
    
    case "January 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "January 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "January 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "January 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "January 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "January 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;  
        
    case "January 8th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Living</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'But the Lord is the true God; He is the living God and the everlasting King. At His wrath the earth will tremble, And the nations will not be able to endure His indignation.'</div></span>Jer 10:10</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "January 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Creation</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";
        
        $("#nature-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "January 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Creation</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        $("#nature-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "January 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Creation</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        $("#nature-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "January 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Creation</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        $("#nature-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "January 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Creation</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        $("#nature-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "January 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Creation</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        $("#nature-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "January 15th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Adonai</b> (Lord) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;  
    
    case "January 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ECC.7.NIV";
        break;
        
    case "January 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.18.NIV";
        break;
        
    case "January 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.6.NIV";
        break;
        
    case "January 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.2.NIV";
        break;
        
    case "January 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ROM.7.NIV";
        break;
        
    case "January 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ROM.7.NIV";
        break; 
        
    case "January 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>One</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Hear, O Israel: The Lord our God, the Lord is one!'</div></span>Deut 6:4</a><br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "January 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Moses</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EXO.2.NIV";
        break;
        
    case "January 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Moses</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EXO.8.NIV";
        break;   
        
    case "January 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Moses</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EXO.22.NIV";
        break;
        
    case "January 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Moses</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EXO.32.NIV";
        break;
    
    case "January 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Moses</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LEV.8.NIV";
        break;
        
    case "January 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Moses</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/DEU.17.NIV";
        break; 
        
    case "January 29th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Elohim</b> (Elohim) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "January 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "January 31st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;    

/*February*/        
    case "February 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "February 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus said</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "February 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything saib by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "February 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;
        
    case "February 5th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Immutable</b> (Unchanging) <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Every good gift and every perfect gift is from above, and comes down from the Father of lights, with whom there is no variation or shadow of turning.'</div></span>James 1:17</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "February 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joshua</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOS.1.NIV";
        break;
        
    case "February 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joshua</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOS.5.NIV";
        break;   
        
    case "February 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joshua</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOS.7.NIV";
        break;
        
    case "February 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joshua</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOS.10.NIV";
        break;
    
    case "February 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joshua</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOS.12.NIV";
        break;
        
    case "February 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joshua</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOS.17.NIV";
        break;
        
    case "February 12th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Shaddai</b> (Almighty God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
        
    case "February 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Samuel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "hhttps://www.bible.com/bible/111/1SA.1.NIV"; 
        break;
        
    case "February 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Samuel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.2.NIV";
        break;
        
    case "February 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Samuel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.3.NIV";
        break;
        
    case "February 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Samuel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.7.NIV";
        break;
    
    case "February 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Samuel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.10.NIV";
        break;
        
     case "February 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Samuel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.13.NIV";
        break;
        
    case "February 19th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Infinite</b> (everywhere <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Great is the Lord, and greatly to be praised; And His greatness is unsearchable.'</div></span>Ps 145:3</a>)<br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "February 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Ezra</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZR.1.NIV";
        break; 
        
    case "February 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Ezra</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZR.2.NIV";
        break; 
        
    case "February 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Ezra</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZR.4.NIV";
        break; 
        
    case "February 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Ezra</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZR.5.NIV";
        break;
        
    case "February 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Ezra</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZR.7.NIV";
        break;
        
    case "February 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Ezra</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZR.8.NIV";
        break; 
        
    case "February 26th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Olam</b> (Jealous God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
        
    case "February 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.6.NIV";
        break;
        
    case "February 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
/*March*/         
    case "March 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "March 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus said</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "March 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "March 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;
        
    case "March 5th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Truthful</b <a class='tooltip' onclick=''><span class='tooltiptext-2'>'And we know that the Son of God has come and has given us an understanding, that we may know Him who is true; and we are in Him who is true, in His Son Jesus Christ. This is the true God and eternal life.'</div></span>1 John 5:20</a>> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "March 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read about <b>Mordecai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EST.4.NIV";
        break;
        
    case "March 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read about <b>Mordecai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EST.5.NIV";
        break;   
        
    case "March 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read about <b>Mordecai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EST.6.NIV";
        break;
        
    case "March 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read about <b>Mordecai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EST.7.NIV";
        break;
    
    case "March 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read about <b>Mordecai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EST.8.NIV";
        break;
        
    case "March 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read about <b>Mordecai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EST.9.NIV";
        break;
        
    case "March 12th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Elyon</b> (Most High God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
        
    case "March 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Job</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOB.1.NIV"; 
        break;
        
    case "March 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Job</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOB.5.NIV";
        break;
        
    case "March 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Job</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOB.10.NIV";
        break;
        
    case "March 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Job</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOB.17.NIV";
        break;
    
    case "March 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Job</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOB.21.NIV";
        break;
        
     case "March 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Job</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOB.31.NIV";
        break;
        
    case "March 19th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Faithful</b> (everywhere <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Through the Lord’s mercies we are not consumed, Because His compassions fail not. They are new every morning; Great is Your faithfulness.'</div></span>Ps 139:7-10</a>)<br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "March 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>David</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.18.NIV";
        break; 
        
    case "March 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>David</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.23.NIV";
        break; 
        
    case "March 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>David</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1SA.28.NIV";
        break; 
        
    case "March 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>David</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/2SA.1.NIV";
        break;
        
    case "March 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>David</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/2SA.5.NIV";
        break;
        
    case "March 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>David</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/2SA.10.NIV";
        break; 
        
    case "March 26th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Qodash</b> (Holy God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
        
    case "March 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.6.NIV";
        break;
        
    case "March 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "March 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.8.NIV";
        break;
        
    case "March 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.10.NIV";
        break;  
    
    case "March 31st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;    
        
        
/*April*/        
    case "April 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus </b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;
    case "April 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Eternal</b> (never ending <a class='tooltip' onclick=''><span class='tooltiptext-2'>'For thus says the One who is high and lifted up, who inhabits eternity, whose name is Holy: ''I dwell in the high and holy place, and also with him who is of a contrite and lowly spirit, to revive the spirit of the lowly, and to revive the heart of the contrite.'</div></span>Is 57:15</a>) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
    case "April 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Solomon</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/PSA.1.niv";
        break;
        
    case "April 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Solomon</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ECC.4.NIV";
        break;
        
    case "April 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Solomon</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/PSA.20.niv";
        break; 
        
    case "April 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Solomon</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ECC.1.NIV";
        break;
        
    case "April 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Solomon</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/SNG.1.NIV";
        break;   
        
    case "April 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Solomon</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ECC.7.NIV";
        break;
        
    case "April 9th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Qanno</b> (Jealous God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
    
    case "April 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Isaiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.1.niv";
        break;
        
    case "April 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Isaiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.1.niv";
        break;
        
    case "April 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Isaiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.1.niv";
        break;
        
    case "April 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Isaiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.1.niv"; 
        break;
        
    case "April 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Isaiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.1.niv";
        break;
        
    case "April 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Isaiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.1.niv";
        break;
        
    case "April 16th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Spirit</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'God is a Spirit: and they that worship him must worship him in spirit and in truth.'</div></span>Jn 4:24 </a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
    
    case "April 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Jeremiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.1.niv";
        break;
        
     case "April 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Jeremiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.1.niv";
        break;
    case "April 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Jeremiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.1.niv";
        break; 
    case "April 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Jeremiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.1.niv";
        break; 
    case "April 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Jeremiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.1.niv";
        break; 
    case "April 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Jeremiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.1.niv";
        break; 
    case "April 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Elohe Israel</b> (God of Israel) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
    case "April 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
    case "April 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break; 
    case "April 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
    case "April 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break; 
    case "April 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
    case "April 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;
    case "April 30th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Omnipresent</b> (everywhere <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there. If I rise on the wings of the dawn; if I settle on the far side of the sea, even there your hand will guide me, your right hand will hold me fast.'</div></span>Ps 139:7-10</a>) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;
        
/*May*/
    case "May 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Ezekiel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZK.1.NIV";
        break;
        
    case "May 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Ezekiel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZK.5.NIV";
        break;
        
    case "May 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Ezekiel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZK.8.NIV";
        break;
        
    case "May 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Ezekiel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZK.12.NIV";
        break;
        
    case "May 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Ezekiel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZK.21.NIV";
        break;
        
    case "May 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything written by <b>Ezekiel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EZK.31.NIV";
        break;  
        
    case "May 7th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Roi</b> (God Who Sees) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
    
    case "May 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Providence</b> (hand in history)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        $("#history-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "May 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Providence</b> (hand in history)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        $("#history-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "May 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Providence</b> (hand in history)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        $("#history-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "May 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Providence</b> (hand in history)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        $("#history-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "May 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Providence</b> (hand in history)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        $("#history-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;
        
    case "May 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Providence</b> (hand in history)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        $("#history-box").removeClass("hidden");
        $(".iframe-box-reading").addClass("hidden");
        break;  
        
    case "May 14th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Omniscient</b> (all knowing <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Do you know the balancings of the clouds, the wondrous works of him who is perfect in knowledge,'</div></span>Job 37:16</a>) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "May 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Daniel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/DAN.1.NIV";
        break;
        
    case "May 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Daniel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/DAN.3.NIV";
        break;
        
    case "May 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Daniel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/DAN.5.NIV";
        break;
        
    case "May 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Daniel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/DAN.8.NIV";
        break;
        
    case "May 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Daniel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/DAN.10.NIV";
        break;
        
    case "May 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Daniel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/DAN.12.NIV";
        break;
        
    case "May 21st":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Gadol / Nora</b> (Great / Terrible God ) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "May 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "May 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "May 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "May 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "May 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "May 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break; 
    
    case "May 28th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Omnipotent</b> (all powerful <a class='tooltip' onclick=''><span class='tooltiptext-2'>'A voice says, Cry out. And I said, What shall I cry? All people are like grass, and all their faithfulness is like the flowers of the field.'</div></span>Job 37:16</a>) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break; 
        
    case "May 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Hosea</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HOS.1.NIV";
        break;
        
    case "May 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Hosea</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HOS.2.NIV";
        break;
        
    case "May 31st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Hosea</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HOS.7.NIV";
        break;    
        
/*June*/
    case "June 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Hosea</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HOS.10.NIV";
        break;
        
    case "June 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Hosea</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HOS.12.NIV";
        break;
        
    case "June 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Hosea</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HOS.13.NIV";
        break;    
    
    case "June 4th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Chanun</b> (Gracious God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "June 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOL.1.NIV";
        break;
        
    case "June 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOL.2.NIV";
        break;
        
    case "June 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOL.3.NIV";
        break;
        
    case "June 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOL.1.NIV";
        break;
        
    case "June 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOL.2.NIV";
        break;
        
    case "June 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Joel</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JOL.3.NIV";
        break;
        
    case "June 11th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Wise</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.'</div></span>Job 37:16</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;  
        
    case "June 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Amos</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/AMO.1.NIV";
        break;
        
    case "June 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Amos</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/AMO.3.NIV";
        break;
        
    case "June 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Amos</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/AMO.4.NIV";
        break;
        
    case "June 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Amos</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/AMO.5.NIV";
        break;
        
    case "June 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Amos</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/AMO.6.NIV";
        break;
        
    case "June 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Amos</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/AMO.8.NIV";
        break;    
        
    case "June 18th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Neeman</b> (Faithful God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
    
    case "June 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ECC.7.NIV";
        break;
        
    case "June 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.18.NIV";
        break;
        
    case "June 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.6.NIV";
        break;
        
    case "June 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.2.NIV";
        break;
        
    case "June 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ROM.7.NIV";
        break;
        
    case "June 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ROM.7.NIV";
        break;    
        
    case "June 25th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Holy</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'In the year that King Uzziah died, I saw the Lord, high and exalted, seated on a throne; and the train of his robe filled the temple. Above him were seraphim, each with six wings: With two wings they covered their faces, with two they covered their feet, and with two they were flying. And they were calling to one another: “Holy, holy, holy is the LORD Almighty; the whole earth is full of his glory.”'</div></span>Is 6:1-3</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;     
        
    case "June 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Obadiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/OBA.1.NIV";
        break;
        
    case "June 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Obadiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/OBA.1.NIV";
        break;
        
    case "June 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Obadiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/OBA.1.NIV";
        break;
        
    case "June 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Obadiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/OBA.1.NIV";
        break;
        
    case "June 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Obadiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/OBA.1.NIV";
        break;    
        
    /*July*/
    case "July 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Obadiah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/OBA.1.NIV";    
        
        
    case "July 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Chai</b> (Living God) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
    
    case "July 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Jonah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JON.1.NIV";
        break;
        
    case "July 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Jonah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JON.2.NIV";
        break;
        
    case "July 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Jonah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JON.3.NIV";
        break;
        
    case "July 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Jonah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JON.4.NIV";
        break;
        
    case "July 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Jonah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JON.1.NIV";
        break;
        
    case "July 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything about <b>Jonah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JON.2.NIV";
        break;  
        
    case "July 9th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Just</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'whom God set forth as a propitiation by His blood, through faith, to demonstrate His righteousness, because in His forbearance God had passed over the sins that were previously committed, to demonstrate at the present time His righteousness, that He might be just and the justifier of the one who has faith in Jesus.'</div></span>Rom 3:25-26</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;     
        
    case "July 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Micah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.1.NIV";
        break;
        
    case "July 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Micah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.2.NIV";
        break;
        
    case "July 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Micah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.3.NIV";
        break;
        
    case "July 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Micah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.4.NIV";
        break;
        
    case "July 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Micah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.5.NIV";
        break;
        
    case "July 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Micah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.6.NIV";
        break;    
    
    case "July 16th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>El Sabaoth</b> (God of Hosts / Armies) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "July 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "July 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "July 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "July 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "July 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "July 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;    
        
    case "July 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Good</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'You are good, and do good; Teach me Your statutes.'</div></span>Ps 119:68</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
     case "July 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Nahum</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/NAM.1.NIV";
        break;
        
    case "July 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Nahum</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/NAM.2.NIV";
        break;
        
    case "July 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Nahum</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/NAM.3.NIV";
        break;
        
    case "July 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Nahum</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/NAM.1.NIV";
        break;
        
    case "July 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Nahum</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/NAM.2.NIV";
        break;
        
    case "July 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Nahum</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/NAM.3.NIV";
        break;     
        
    case "July 30th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh</b> (The God I am) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "July 31st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Habakkuk</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAB.1.NIV";
        break;
      
        
/*August*/        
    case "August 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Habakkuk</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAB.2.NIV";
        break;
        
    case "August 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Habakkuk</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAB.3.NIV";
        break;
        
    case "August 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Habakkuk</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAB.1.NIV";
        break;
        
    case "August 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Habakkuk</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAB.2.NIV";
        break;
        
    case "August 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Habakkuk</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAB.3.NIV";
        break;    
        
    case "August 6th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Loving</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'He who does not love does not know God, for God is love.'</div></span>Ps 119:68</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "August 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zephaniah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEP.1.NIV";
        
    case "August 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zephaniah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEP.2.NIV";
        break;
        
    case "August 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zephaniah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEP.3.NIV";
        break;
        
    case "August 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zephaniah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEP.1.NIV";
        break;
        
    case "August 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zephaniah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEP.2.NIV";
        break;
        
    case "August 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zephaniah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEP.3.NIV";    
    
    case "August 13th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Jireh</b> (Lord Who Sees) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
    
    case "August 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "August 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "August 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "August 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "August 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "August 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;    
        
    case "August 20th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Gracious</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'So he prayed to the Lord, and said, “Ah, Lord, was not this what I said when I was still in my country? Therefore I fled previously to Tarshish; for I know that You are a gracious and merciful God, slow to anger and abundant in lovingkindness, One who relents from doing harm.'</div></span>Jonah 4:2</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "August 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Haggai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAG.1.NIV";
        
    case "August 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Haggai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAG.2.NIV";
        break;
        
    case "August 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Haggai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAG.1.NIV";
        break;
        
    case "August 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Haggai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAG.2.NIV";
        break;
        
    case "August 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Haggai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAG.1.NIV";
        break;
        
    case "August 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Haggai</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HAG.2.NIV";    
        
    case "August 27th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Rapha</b> (Lord Who Heals) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "August 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Redemption</b> (through Jesus' Life)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.23.NIV";
        break;
        
    case "August 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Redemption</b> (through Jesus' Life)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.7.NIV";
        break;
        
    case "August 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Redemption</b> (through Jesus' Life)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.12.NIV";
        break;
        
    case "August 31st":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Redemption</b> (through Jesus' Life)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.14.NIV";
        break;
        
/*September*/        
    case "September 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Redemption</b> (protective care)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.8.NIV";
        break;
        
    case "September 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Redemption</b> (protective care)";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "ttps://www.bible.com/bible/111/MRK.3.NIV";
        break;    
        
    case "September 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Merciful</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'(for the Lord your God is a merciful God), He will not forsake you nor destroy you, nor forget the covenant of your fathers which He swore to them.'</div></span>Deut 4:31</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "September 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zechariah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEC.1.NIV";
        
    case "September 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zechariah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEC.3.NIV";
        break;
        
    case "September 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zechariah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEC.5.NIV";
        break;
        
    case "September 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zechariah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEC.7.NIV";
        break;
        
    case "September 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zechariah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEC.9.NIV";
        break;
        
    case "September 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Zechariah</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ZEC.11.NIV";    
        
    case "September 10th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Nissi</b> (Lord, My Banner) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "September 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "September 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "September 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "September 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "September 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "September 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;    
        
    case "September 17th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Patient</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'The Lord is not slack concerning His promise, as some count slackness, but is longsuffering toward us, not willing that any should perish but that all should come to repentance.'</div></span>2 Pet 3:9</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "September 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Malachi</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.1.NIV";
        
    case "September 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Malachi</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.2.NIV";
        break;
        
    case "September 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Malachi</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.3.NIV";
        break;
        
    case "September 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Malachi</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.4.NIV";
        break;
        
    case "September 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Malachi</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.1.NIV";
        break;
        
    case "September 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Malachi</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.2.NIV";    
        
    case "September 24th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Qadash</b> (Lord Who Sanctifies) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;  
        
    case "September 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Matthew</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.1.NIV";
        
    case "September 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Matthew</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "September 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Matthew</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;
        
    case "September 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Matthew</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.10.NIV";
        break;
        
    case "September 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Matthew</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.18.NIV";
        break;
        
    case "September 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Matthew</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.24.NIV";    
        
/*October*/
        
    case "October 1st":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Sovereign</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'They called out in a loud voice, How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?'</div></span>Rev 6:10</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "October 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Mark</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        
    case "October 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Mark</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.3.NIV";
        break;
        
    case "October 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Mark</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.5.NIV";
        break;
        
    case "October 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Mark</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.7.NIV";
        break;
        
    case "October 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Mark</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.9.NIV";
        break;
        
    case "October 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Mark</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.13.NIV";    
        
    case "October 8th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Rohi</b> (Lord, My Shepherd) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "October 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "October 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "October 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "October 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "October 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "October 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;    
        
    case "October 15th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Immense</b> (extremely great) <a class='tooltip' onclick=''><span class='tooltiptext-2'>'They called out in a loud voice, How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?'</div></span>Rev 6:10</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "October 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Luke</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.1.NIV";
        
    case "October 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Luke</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.4.NIV";
        break;
        
    case "October 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Luke</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.7.NIV";
        break;
        
    case "October 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Luke</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.11.NIV";
        break;
        
    case "October 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Luke</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.15.NIV";
        break;
        
    case "October 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Luke</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.21.NIV";    
        
    case "October 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Tsidkenu</b> (Lord Our Righteousness) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "October 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>John</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        
    case "October 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>John</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.3.NIV";
        break;
        
    case "October 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>John</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.7.NIV";
        break;
        
    case "October 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>John</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.10.NIV";
        break;
        
    case "October 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>John</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.15.NIV";
        break;
        
    case "October 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>John</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.21.NIV";    
        
    case "October 29th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Pure</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'But you are pure and cannot stand the sight of evil. Will you wink at their treachery? Should you be silent while the wicked swallow up people more righteous than they?'</div></span>Hab 1:13</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "October 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Paul</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ROM.1.NIV";
        
    case "October 31st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Paul</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1CO.1.NIV";
        break;
        
/*November*/        
        
    case "November 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Paul</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/EPH.1.NIV";
        break;
        
    case "November 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Paul</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/COL.1.NIV";
        break;
        
    case "November 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Paul</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1TH.1.NIV";
        break;
        
    case "November 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything by <b>Paul</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/TIT.1.NIV";    
        
    case "November 5th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Shalom</b> (Lord is Peace) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;     
        
    case "November 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "November 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "November 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "November 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "November 10th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "November 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;    
        
    case "November 12th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Hateful</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'These six things the Lord hates, Yes, seven are an abomination to Him: A proud look, A lying tongue, Hands that shed innocent blood, A heart that devises wicked plans, Feet that are swift in running to evil, A false witness who speaks lies, And one who sows discord among brethren.'</div></span>Prov 6:16-19</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;   
        
    case "November 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Hebrews</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HEB.1.NIV";
        
    case "November 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Hebrews</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HEB.3.NIV";
        break;
        
    case "November 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Hebrews</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HEB.5.NIV";
        break;
        
    case "November 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Hebrews</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HEB.7.NIV";
        break;
        
    case "November 17th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Hebrews</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HEB.9.NIV";
        break;
        
    case "November 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Hebrews</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/HEB.11.NIV";    
        
    case "November 19th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Yahweh Shammah</b> (Lord is There) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "November 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>James</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.1.NIV";
        
    case "November 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>James</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.2.NIV";
        break;
        
    case "November 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>James</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.3.NIV";
        break;
        
    case "November 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>James</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.4.NIV";
        break;
        
    case "November 24th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>James</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.5.NIV";
        break;
        
    case "November 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>James</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.1.NIV";    
        
    case "November 26th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Happy</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'His pleasure is not in the strength of the horse,  nor his delight in the legs of the warrior;  the Lord delights in those who fear him, who put their hope in his unfailing love'</div></span>Ps 147:10-11</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
    
     case "November 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Peter</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1PE.1.NIV";
        
    case "November 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Peter</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1PE.3.NIV";
        break;
        
    case "November 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Peter</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/2PE.1.NIV";
        break;
        
    case "November 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Peter</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/2PE.3.NIV";
        break;
        
/*December*/        
    case "December 1st":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Peter</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/1PE.2.NIV";
        break;
        
    case "December 2nd":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Peter</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/2PE.2.NIV";    
        
    case "December 3rd":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Immanuel</b> (God is with us) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "December 4th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.4.NIV";
        break;
        
    case "December 5th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.1.NIV";
        break;
        
    case "December 6th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/LUK.2.NIV";
        break;
        
    case "December 7th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "December 8th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by<b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JHN.1.NIV";
        break;
        
    case "December 9th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything said by <b>Jesus</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAT.7.NIV";
        break;    
        
    case "December 10th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Immortal</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Now to the King eternal, immortal, invisible, to God who alone is wise, be honor and glory forever and ever. Amen.'</div></span>1 Tim 1:17</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "December 11th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Jude</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.1.NIV";
        
    case "December 12th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Jude</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.2.NIV";
        break;
        
    case "December 13th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Jude</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.3.NIV";
        break;
        
    case "December 14th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Jude</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.4.NIV";
        break;
        
    case "December 15th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Jude</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.5.NIV";
        break;
        
    case "December 16th":  
        document.getElementById("pm7-instructions").innerHTML = "Read anything in <b>Jude</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JAS.1.NIV";
    
    case "December 17th":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Jesus</b> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "December 18th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ECC.7.NIV";
        break;
        
    case "December 19th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/JER.18.NIV";
        break;
        
    case "December 20th":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MIC.6.NIV";
        break;
        
    case "December 21st":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MAL.2.NIV";
        break;
        
    case "December 22nd":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ROM.7.NIV";
        break;
        
    case "December 23rd":  
        document.getElementById("pm7-instructions").innerHTML = "Select Anywhere in the Bible to Read";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ROM.7.NIV";
        break;    
        
    case "December 24th":  
        document.getElementById("pm7-instructions").innerHTML = "God is <b>Invisible</b> <a class='tooltip' onclick=''><span class='tooltiptext-2'>'By faith he forsook Egypt, not fearing the wrath of the king; for he endured as seeing Him who is invisible.'</div></span>Heb. 11:27</a> <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");
        break;    
        
    case "December 25th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Judgement</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Praiseworthy thing does this call me to believe about God that I may now Declare?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.26.NIV";
        break;
        
    case "December 26th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Judgement</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Virtuous thing does this call me to believe about what is Good that I may need for Decisions?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/ISA.13.NIV";
        break;
        
    case "December 27th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Judgement</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Problematic thing does this call me to believe about the Gospel that I may need to Defend?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/2PE.3.NIV";
        break;
        
    case "December 28th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Judgement</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Concrete way does this call me to behave in my Worship of God as a limited person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/GEN.6.NIV";
        break;
        
    case "December 29th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Judgement</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Caring way does this call me to behave in my Walk before God as an imperfect person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/MRK.9.NIV";
        break;
        
    case "December 30th":  
        document.getElementById("pm7-instructions").innerHTML = "Meditate on God's <b>Judgement</b>";
        document.getElementById("pm7-question").innerHTML = "What, if any, Creative way does this call me to behave in my Witness to God as a Forgiven person?";

        document.getElementById("pm7-reading").data = "https://www.bible.com/bible/111/REV.21.NIV";
        break;    
        
    case "December 31st":  
        document.getElementById("pm7-instructions").innerHTML = "God's name, <b>Omega</b> (the end) <br>Meditate on what this means for these 6 questions:";
        $("#name-questions").removeClass("hidden");
        $("#pm7-question").addClass("hidden");
        $("object").addClass("hidden");         
}