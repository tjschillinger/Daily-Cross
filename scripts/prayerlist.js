    var d = (localStorage.getItem("theDay"));


    if (d ==="Sunday"){

        document.getElementById("prayer-list").innerHTML = "Pray for Other Christians <a class='tooltip'  onclick=''><span class='tooltiptext-2'>'We give thanks to God, the Father of our Lord Jesus Christ, praying always for you, since we heard of your faith in Christ Jesus and the blove which you have for call the saints; because of the ahope blaid up for you in heaven, of which you previously cheard in the word of truth, the gospel.'</span>Col. 1:5</a>";
    };

    if (d ==="Monday"){

        document.getElementById("prayer-list").innerHTML = "Pray for Your Family <a class='tooltip' onclick='' ><span class='tooltiptext-2'>'he would rise early in the morning and offer burnt offerings according to the number of them all. For Job said, ''It may be that my children have sinned, and cursed God in their hearts.'' Thus Job did continually.'</span>Job 1:1-5</a>";
    };

    if (d ==="Tuesday"){

        document.getElementById("prayer-list").innerHTML = "Pray for Your Friends <a class='tooltip' onclick='' ><span class='tooltiptext-2'>'as you help us by your prayers. Then many will give thanks on our behalf for the gracious favor granted us in answer to the prayers of many..'</span>2 Cor. 1:11</a>";
    };

    if (d ==="Wednesday"){

        document.getElementById("prayer-list").innerHTML = "Pray for Your Leaders <a class='tooltip' onclick='' ><span class='tooltiptext-2'>'You then, my son, be strong in the grace that is in Christ Jesus. 2 And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.'</span>2 Tim 2:1-2</a>";
    };

    if (d ==="Thursday"){

        document.getElementById("prayer-list").innerHTML = "Pray for the Suffering <a class='tooltip' onclick=''><span class='tooltiptext-2'>'Are any of you suffering hardships? You should pray. Are any of you happy? You should sing praises. 14Are any of you sick? You should call for the elders of the church to come and pray over you, anointing you with oil in the name of the Lord. 15Such a prayer offered in faith will heal the sick, and the Lord will make you well. And if you have committed any sins, you will be forgiven.'</span>James 5:13-15</a>";
    };

    if (d ==="Friday"){

        document.getElementById("prayer-list").innerHTML = "Pray for your Enemies <a class='tooltip' onclick=''><span class='tooltiptext-2'>'But I say unto you which hear, Love your enemies, do good to them which hate you, Bless them that curse you, and pray for them which despitefully use you.'</span>Luke 6:27-28</a>";
    };

    if (d ==="Saturday"){

        document.getElementById("prayer-list").innerHTML = "Pray for Your Needs <a class='tooltip' onclick='' ><span class='tooltiptext-2'>'Don’t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done.'</span>Phil. 4:6</a>";
    };

/*Nation Prayer List*/

var x = (localStorage.getItem("storageName"));

/*January*/
    if (x==="January 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="January 2nd"){
        
        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";

    };

    if (x==="January 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Afghanistan'>Afghanistan</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Albania'>Albania</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Algeria'>Algeria</a>)";
    };

    if (x==="January 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/American_Samoa'>American Samoa</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Andorra'>Andorra</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Angola'>Angola</a>)";
    };

    if (x==="January 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Anguilla'>Anguilla</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antarctica'>Antarctica</a>)";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antigua'>Antigua</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Argentina'>Argentina</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Armenia'>Armenia</a>)";
    };

    if (x==="January 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Aruba'>Aruba</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Australia'>Australia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Austria'>Austria</a>";
    };

    if (x ==="January 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Azerbaidjan'>Azerbaidjan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahamas'>Bahamas</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x ==="January 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahrain'>Bahrain</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bangladesh'>Bangladesh</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Barbados'>Barbados</a>";
    };

    if (x==="January 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belarus'>Belarus</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belgium'>Belgium</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belize'>Belize</a>";
        
    };

    if (x==="January 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Benin'>Benin</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bermuda'>Bermuda</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bhutan'>Bhutan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bolivia'>Bolivia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bosnia'>Bosnia</a>";
    };

    if (x==="January 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Botswana'>Botswana</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brazil'>Brazil</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brunei'>Brunei</a>";
    };

    if (x==="January 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bulgaria'>Bulgaria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burkina_Faso'>Burkina Faso</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burundi'>Burundi</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cambodia'>Cambodia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cameroon'>Cameroon</a>";
    };

    if (x==="January 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Canada'>Canada</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cape_Verde'>Cape Verde</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cayman_Islands'>Cayman Islands</a>";
    };

    if (x==="January 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Central_African_Republic'>Central African Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chad'>Chad</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chile'>Chile</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/China'>China</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Christmas_Island'>Christmas Island</a>";
    };

    if (x==="January 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cocos_(Keeling)_Islands'>Cocos Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Columbia'>Columbia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Comoros'>Comoros</a>";
    };

    if (x==="January 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo'>Democratic Republic of the Congo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Republic_of_the_Congo'>Republic of the Congo</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cook_Islands'>Cook Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Costa_Rica'>Costa Rica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ivory_Coast'>Ivory Coast</a>";
    };

    if (x==="January 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Croatia'>Croatia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cuba'>Cuba</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cypress'>Cypress</a>";
    };

    if (x==="January 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Czech_Republic'>Czech Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Denmark'>Denmark</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Djibouti'>Djibouti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominica'>Dominica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominican_Republic'>Dominican Republic</a>";
    };

    if (x==="January 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/East_Timor'>East Timor</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ecuador'>Ecuador</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Egypt'>Egypt</a>";
    };

    if (x==="January 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/El_Salvador'>El Salvador/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Equatorial_Guinea'>Equatorial Guinea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Eritrea'>Eritrea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Estonia'>Estonia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ethiopia'>Ethiopia</a>";
    };

    if (x==="January 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Falkland_Islands'>Falkland Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Faroe_Islands'>Faroe Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Fiji'>Fiji</a>";
    };

    if (x==="January 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Finland'>Finland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/France'>France</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="January 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Guiana'>French Guiana</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Polynesia'>French Polynesia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Southern_and_Antarctic_Lands'>French Southern and Antarctic Lands</a>";
    };

    if (x==="January 31st"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gabon'>Gabon</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gambia'>Gambia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Georgia'>Georgia</a>";
    };


/*February*/
    if (x==="February 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="February 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Germany'>Germany</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ghana'>Ghana</a>)";
        
        $("#nation-3").addClass("hidden");

    };

    if (x==="February 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gibraltar'>Gibraltar</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Great_Britain'>Great Britain</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greece'>Greece</a>)";
    };

    if (x==="February 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greenland'>Greenland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Grenada'>Grenada</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guadeloupe'>Guadeloupe</a>)";
    };

    if (x==="February 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guam'>Guam</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guatemala'>Guatemala</a>)";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="February 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea'>Guinea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea-Bissau'>Guinea-Bissau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guyana'>Guyana</a>)";
    };

    if (x==="February 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Haiti'>Haiti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Holy_See'>Holy See</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Honduras'>Honduras</a>";
    };

    if (x ==="February 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hong_Kong'>Hong Kong</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hungary'>Hungary</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x ==="February 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iceland'>Iceland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/India'>India</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Indonesia'>Indonesia</a>";
    };

    if (x==="February 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iran'>Iran</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iraq'>Iraq</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ireland'>Ireland</a>";
        
    };

    if (x==="February 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Israel'>Israel</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Italy'>Italy</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="February 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jamaica'>Jamaica</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Japan'>Japan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jordan'>Jordan</a>";
    };

    if (x==="February 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kazakhstan'>Kazakhstan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kenya'>Kenya</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kiribati'>Kiribati</a>";
    };

    if (x==="February 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/North_Korea'>North Korea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Korea'>South Korea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="February 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kosovo'>Kosovo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kuwait'>Kuwait</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kyrgyzstan'>Kyrgyzstan</a>";
    };

    if (x==="February 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Laos'>Laos</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Latvia'>Latvia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lebanon'>Lebanon</a>";
    };

    if (x==="February 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lesotho'>Lesotho</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liberia'>Liberia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="February 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Libya'>Libya</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liechtenstein'>Liechtenstein</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lithuania'>Lithuania</a>";
    };

    if (x==="February 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Luxembourg'>Luxembourg</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macau'>Macau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macedonia'>Macedonia</a>";
    };

    if (x==="February 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Madagascar'>Madagascar</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malawi'>Malawi</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="February 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malaysia'>Malaysia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Maldives'>Maldives</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mali'>Mali</a>";
    };

    if (x==="February 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malta'>Malta</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Marshall_Islands'>Marshall Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Martinique'>Martinique</a>";
    };

    if (x==="February 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritania'>Mauritania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritius'>Mauritius</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="February 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mayotte'>Mayotte</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mexico'>Mexico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Micronesia'>Micronesia</a>";
    };

    if (x==="February 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Moldova'>Moldova</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Monaco'>Monaco</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mongolia'>Mongolia</a>";
    };

    if (x==="February 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montenegro'>Montenegro/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montserrat'>Montserrat</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="February 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Morocco'>Morocco</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mozambique'>Mozambique</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Myanmar'>Myanmar</a>";
    };

    if (x==="February 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Namibia'>Namibia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nauru'>Nauru</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nepal'>Nepal</a>";
    };


/*March*/
    if (x==="March 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="March 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands'>Netherlands</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands_Antilles'>Netherlands Antilles</a>)";
        
        $("#nation-3").addClass("hidden");

    };

    if (x==="March 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Caledonia'>New Caledonia</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Zealand'>New Zealand</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nicaragua'>Nicaragua</a>)";
    };

    if (x==="March 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niger'>Niger</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nigeria'>Nigeria</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niue'>Niue</a>)";
    };

    if (x==="March 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Northern_Mariana_Islands'>Northern Mariana Islands</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Norway'>Norway</a>)";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Oman'>Oman</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pakistan'>Pakistan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palau'>Palau</a>)";
    };

    if (x==="March 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palestine'>Palestine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Panama'>Panama</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Papua_New_Guinea'>Papua New Guinea</a>";
    };

    if (x ==="March 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Paraguay'>Paraguay</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Peru'>Peru</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x ==="March 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Philippines'>Philippines</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pitcairn_Islands'>Pitcairn Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Poland'>Poland</a>";
    };

    if (x==="March 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Portugal'>Portugal</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Puerta_Rico'>Puerta Rico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Qatar'>Qatar</a>";
        
    };

    if (x==="March 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Réunion'>Réunion</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belgium'>Belgium</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Russia'>Russia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Rwanda'>Rwanda</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Kitts'>Saint Kitts</a>";
    };

    if (x==="March 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Lucia'>Saint Lucia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines'>Saint Vincent</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Samoa'>Samoa</a>";
    };

    if (x==="March 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/San_Marino'>San Marino</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/São_Tomé'>São Tomé</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saudi_Arabia'>Saudi Arabia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Senegal'>Senegal Faso</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Serbia'>Serbia</a>";
    };

    if (x==="March 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Seychelles'>Seychelles</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sierra_Leone'>Sierra Leone</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Singapore'>Singapore</a>";
    };

    if (x==="March 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovakia'>Slovakia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovenia'>Slovenia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Solomon_Islands'>Solomon Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Somalia'>Somalia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Africa'>South Africa</a>";
    };

    if (x==="March 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Sudan'>South Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Spain'>Spain</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sri_Lanka'>Sri Lanka</a>";
    };

    if (x==="March 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sudan'>Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Suriname'>Suriname</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Swaziland'>Swaziland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sweden'>Sweden</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Switzerland'>Switzerland</a>";
    };

    if (x==="March 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Syria'>Syria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Taiwan'>Taiwan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tajikistan'>Tajikistan</a>";
    };

    if (x==="March 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tanzania'>Tanzania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Thailand'>Thailand</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tibet'>Tibet</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/East_Timor'>East Timor</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Togo'>Togo</a>";
    };

    if (x==="March 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tokelau'>Tokelau</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tonga'>Tonga</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Trinidad'>Trinidad</a>";
    };

    if (x==="March 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tunisia'>Tunisia/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkey'>Turkey</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkmenistan'>Turkmenistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tuvalu'>Tuvalu</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uganda'>Uganda</a>";
    };

    if (x==="March 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ukraine'>Ukraine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Arab_Emirates'>United Arab Emirates</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Kingdom'>United Kingdom</a>";
    };

    if (x==="March 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_States'>United States</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uruguay'>Uruguay</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="March 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uzbekistan'>Uzbekistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vanuata'>Vanuata</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Venezuela'>Venezuela</a>";
    };

    if (x==="March 31st"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vietnam'>Vietnam</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Virgin_Islands'>Virgin Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Yemen'>Yemen</a>";
    };


    if (x==="April 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="April 2nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zimbabwe'>Zimbabwe</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zambia'>Zambia</a>)";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 3rd"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="April 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Afghanistan'>Afghanistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Albania'>Albania</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Algeria'>Algeria</a>)";
    };

    if (x==="April 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/American_Samoa'>Amsamoa</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Andorra'>Andorra</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Angola'>Angola</a>";
    };

    if (x==="April 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Anguilla'>Anguilla</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antarctica'>Antarctica</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antigua'>Antigua</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Argentina'>Argentina</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Armenia'>Armenia</a>";
    };

    if (x ==="April 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Aruba'>Aruba</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Australia'>Australia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Austria'>Austria</a>";
    };

    if (x ==="April 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Azerbaidjan'>Azerbaidjan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahamas'>Bahamas</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahrain'>Bahrain</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bangladesh'>Bangladesh</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Barbados'>Barbados</a>";
        
    };

    if (x==="April 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belarus'>Belarus</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belgium'>Belgium</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belize'>Belize</a>";
    };

    if (x==="April 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Benin'>Benin</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bermuda'>Bermuda</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bhutan'>Bhutan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bolivia'>Bolivia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bosnia'>Bosnia</a>";
    };

    if (x==="April 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Botswana'>Botswana</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brazil'>Brazil</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brunei'>Brunei</a>";
    };

    if (x==="April 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bulgaria'>Bulgaria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burkina_Faso'>Burkina Faso</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burundi'>Burundi</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cambodia'>Cambodia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cameroon'>Cameroon</a>";
    };

    if (x==="April 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Canada'>Canada</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cape_Verde'>Cape Verde</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cayman_Islands'>Cayman Islands</a>";
    };

    if (x==="April 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Central_African_Republic'>Central African Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chad'>Chad</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chile'>Chile</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/China'>China</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Christmas_Island'>Christmas Island</a>";
    };

    if (x==="April 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cocos_(Keeling)_Islands'>Cocos</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Columbia'>Columbia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Comoros'>Comoros</a>";
    };

    if (x==="April 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo'>Democratic Republic of the Congo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Republic of the Congo'>Republic of the Congo</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cook_Islands'>Cook Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Costa_Rica'>Costa Rica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ivory_Coast'>Ivory Coast</a>";
    };

    if (x==="April 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Croatia'>Croatia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cuba'>Cuba</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cypress'>Cypress</a>";
    };

    if (x==="April 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Czech_Republic'>Czech Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Denmark'>Denmark</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Djibouti'>Djibouti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominica'>Dominica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominican_Republic'>Dominican Republic</a>";
    };

    if (x==="April 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/East_Timor'>East Timor</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ecuador'>Ecuador</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Egypt'>Egypt</a>";
    };

    if (x==="April 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/El_Salvador'>El Salvador</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Equatorial_Guinea'>Equatorial Guinea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="April 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Eritrea'>Eritrea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Estonia'>Estonia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ethiopia'>Ethiopia</a>";
    };

    if (x==="April 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Falkland_Islands'>Falkland Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Faroe_Islands'>Faroe Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Fiji'>Fiji</a>";
    };

    if (x==="April 30th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Finland'>Finland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/France'>France</a>";
        
        $("#nation-3").addClass("hidden");
    };

/*May*/
    if (x==="May 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="May 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Guiana'>French Guiana</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Polynesia'>French Polynesia</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Southern_and_Antarctic_Lands'>French Southern and Antarctic Lands</a>)";

    };

    if (x==="May 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gabon'>Gabon</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gambia'>Gambia</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Georgia'>Georgia</a>)";
    };

    if (x==="May 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Germany'>Germany</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ghana'>Ghana</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="May 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gibraltar'>Gibraltar</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Great_Britain'>Great Britain</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greece'>Greece</a>)";
    };

    if (x==="May 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greenland'>Greenland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Grenada'>Grenada</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guadeloupe'>Guadeloupe</a>)";
    };

    if (x==="May 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guam'>Guam</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guatemala'>Guatemala</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x ==="May 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea'>Guinea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea-Bissau'>Guinea-Bissau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guyana'>Guyana</a>";
    };

    if (x ==="May 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Haiti'>Haiti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Holy_See'>Holy See</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Honduras'>Honduras</a>";
    };

    if (x==="May 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hong_Kong'>Hong Kong</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hungary'>Hungary</a>";
        
        $("#nation-3").addClass("hidden");
        
    };

    if (x==="May 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iceland'>Iceland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/India'>India</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Indonesia'>Indonesia</a>";
    };

    if (x==="May 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iran'>Iran</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iraq'>Iraq</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ireland'>Ireland</a>";
    };

    if (x==="May 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Israel'>Israel</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Italy'>Italy</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="May 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jamaica'>Jamaica</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Japan'>Japan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jordan'>Jordan</a>";
    };

    if (x==="May 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kazakhstan'>Kazakhstan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kenya'>Kenya</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kiribati'>Kiribati</a>";
    };

    if (x==="May 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/North_Korea'>North Korea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Korea'>South Korea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="May 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kosovo'>Kosovo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kuwait'>Kuwait</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kyrgyzstan'>Kyrgyzstan</a>";
    };

    if (x==="May 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Laos'>Laos</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Latvia'>Latvia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lebanon'>Lebanon</a>";
    };

    if (x==="May 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lesotho'>Lesotho</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liberia'>Liberia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="May 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Libya'>Libya</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liechtenstein'>Liechtenstein</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lithuania'>Lithuania</a>";
    };

    if (x==="May 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Luxembourg'>Luxembourg</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macau'>Macau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macedonia'>Macedonia</a>";
    };

    if (x==="May 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Madagascar'>Madagascar</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malawi'>Malawi</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="May 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malaysia'>Malaysia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Maldives'>Maldives</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mali'>Mali</a>";
    };

    if (x==="May 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malta'>Malta</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Marshall_Islands'>Marshall Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Martinique'>Martinique</a>";
    };

    if (x==="May 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritania'>Mauritania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritius'>Mauritius</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="May 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mayotte'>Mayotte/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mexico'>Mexico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Micronesia'>Micronesia</a>";
    };

    if (x==="May 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Moldova'>Moldova</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Monaco'>Monaco</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mongolia'>Mongolia</a>";
    };

    if (x==="May 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montenegro'>Montenegro</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montserrat'>Montserrat</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="May 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Morocco'>Morocco</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mozambique'>Mozambique</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Myanmar'>Myanmar</a>";
    };

    if (x==="May 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Namibia'>Namibia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nauru'>Nauru</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nepal'>Nepal</a>";
    };

    if (x==="May 31st"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands'>Netherlands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands_Antilles'>Netherlands Antilles</a>";
        
        $("#nation-3").addClass("hidden");
    };

/*June*/
    if (x==="June 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="June 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Caledonia'>New Caledonia</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Zealand'>New Zealand</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nicaragua'>Nicaragua</a>)";

    };

    if (x==="June 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niger'>Niger</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nigeria'>Nigeria</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niue'>Niue</a>)";
    };

    if (x==="June 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Northern_Mariana_Islands'>Northern Mariana Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Norway'>Norway</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="June 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Oman'>Oman</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pakistan'>Pakistan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palau'>Palau</a>)";
    };

    if (x==="June 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palestine'>Palestine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Panama'>Panama</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Papua_New_Guinea'>Papua New Guinea</a>)";
    };

    if (x==="June 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Paraguay'>Paraguay</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Peru'>Peru</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x ==="June 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Philippines'>Philippines</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pitcairn_Islands'>Pitcairn Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Poland'>Poland</a>";
    };

    if (x ==="June 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Portugal'>Portugal</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Puerta_Rico'>Puerta Rico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Qatar'>Qatar</a>";
    };

    if (x==="June 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Réunion'>Réunion</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Romania'>Romania</a>";
        
        $("#nation-3").addClass("hidden");
        
    };

    if (x==="June 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Russia'>Russia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Rwanda'>Rwanda</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Kitts'>Saint Kitts</a>";
    };

    if (x==="June 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Lucia'>Saint Lucia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines'>Saint Vincent</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Samoa'>Samoa</a>";
    };

    if (x==="June 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/San_Marino'>San Marino</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sao_Tome'>Sao Tome</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="June 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saudi_Arabia'>Saudi Arabia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Senegal'>Senegal</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Serbia'>Serbia</a>";
    };

    if (x==="June 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Seychelles'>Seychelles</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sierra_Leone'>Sierra Leone</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Singapore'>Singapore</a>";
    };

    if (x==="June 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovakia'>Slovakia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovenia'>Slovenia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="June 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Solomon_Islands'>Solomon Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Somalia'>Somalia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Africa'>South Africa</a>";
    };

    if (x==="June 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Sudan'>South Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Spain'>Spain</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sri_Lanka'>Sri Lanka</a>";
    };

    if (x==="June 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sudan'>Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Suriname'>Suriname</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="June 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Swaziland'>Swaziland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sweden'>Sweden</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Switzerland'>Switzerland</a>";
    };

    if (x==="June 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Syria'>Syria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Taiwan'>Taiwan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tajikistan'>Tajikistan</a>";
    };

    if (x==="June 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tanzania'>Tanzania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Thailand'>Thailand</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="June 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tibet'>Tibet</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Timor-Leste'>Timor Leste</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Togo'>Togo</a>";
    };

    if (x==="June 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tokelau'>Tokelau</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tongo'>Tongo</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Trinidad'>Trinidad</a>";
    };

    if (x==="June 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tunisia'>Tunisia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkey'>Turkey</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="June 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkmenistan'>Turkmenistan/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tuvalu'>Tuvalu</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uganda'>Uganda</a>";
    };

    if (x==="June 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ukraine'>Ukraine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Arab_Emirates'>United Arab Emirates</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Kingdom'>United Kingdom</a>";
    };

    if (x==="June 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_States'>United States</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uruguay'>Uruguay</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="June 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uzbekistan'>Uzbekistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vanuata'>Vanuata</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Venezuela'>Venezuela</a>";
    };

    if (x==="June 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vietnam'>Vietnam</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/NaVirgin_Islandsuru'>Virgin Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Yemen'>Yemen</a>";
    };

/*July*/
    if (x==="July 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="July 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zambia'>Zambia</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zimbabwe'>Zimbabwe</a>)";
        
        $("#nation-3").addClass("hidden");

    };

    if (x==="July 3rd"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="July 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Afghanistan'>Afghanistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Albania'>Albania</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Algeria'>Algeria</a>)";
    };

    if (x==="July 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/American_Samoa'>American Samoa</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Andorra'>Andorra</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Angola'>Angola</a>)";
    };

    if (x==="July 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Anguilla'>Anguilla</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antarctica'>Antarctica</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antingua'>Antingua</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Argentina'>Argentina</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Armenia'>Armenia</a>";
    };

    if (x ==="July 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Aruba'>Aruba</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Australia'>Australia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Austria'>Austria</a>";
    };

    if (x ==="July 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Azerbaidjan'>Azerbaidjan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahamas'>Bahamas</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahrain'>Bahrain</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bangladesh'>Bangladesh</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Barbados'>Barbados</a>";
        
    };

    if (x==="July 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belarus'>Belarus</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belgium'>Belgium</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belize'>Belize</a>";
    };

    if (x==="July 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Benin'>Benin</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bermuda'>Bermuda</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bhutan'>Bhutan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bolivia'>Bolivia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bosnia'>Bosnia</a>";
    };

    if (x==="July 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Botswana'>Botswana</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brazil'>Brazil</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brunei'>Brunei</a>";
    };

    if (x==="July 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bulgaria'>Bulgaria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burkina_Faso'>Burkina Faso</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burundi'>Burundi</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cambodia'>Cambodia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cameroon'>Cameroon</a>";
    };

    if (x==="July 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Canada'>Canada</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cape_Verde'>Cape Verde</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cayman_Islands'>Cayman Islands</a>";
    };

    if (x==="July 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Central_African_Republic'>Central African Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chad'>Chad</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chile'>Chile</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/China'>China</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Christmas_Island'>Christmas Island</a>";
    };

    if (x==="July 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cocos_(Keeling)_Islands'>Cocos Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Columbia'>Columbia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Comoros'>Comoros</a>";
    };

    if (x==="July 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo'>Democratic Republic of the Congo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Republic_of_the_Congo'>Republic of the Congo</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cook_Islands'>Cook Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Costa_Rica'>Costa Rica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ivory_Coast'>Ivory Coast</a>";
    };

    if (x==="July 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Croatia'>Croatia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cuba'>Cuba</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cypress'>Cypress</a>";
    };

    if (x==="July 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Czech_Republic'>Czech Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Denmark'>Denmark</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Djibouti'>Djibouti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominica'>Dominica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominican_Republic'>Dominican Republic</a>";
    };

    if (x==="July 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/East_Timor'>East Timor/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ecuador'>Ecuador</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Egypt'>Egypt</a>";
    };

    if (x==="July 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/El_Salvador'>El Salvador</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Equatorial_Guinea'>Equatorial Guinea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Eritrea'>Eritrea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Estonia'>Estonia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ethiopia'>Ethiopia</a>";
    };

    if (x==="July 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Falkland_Islands'>Falkland Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Faroe_Islands'>Faroe Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Fiji'>Fiji</a>";
    };

    if (x==="July 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Finland'>Finland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/France'>France</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="July 31st"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Guiana'>French Guiana</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Polynesia'>French Polynesia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Southern_and_Antarctic_Lands'>French Southern Lands</a>";
    };

/*August*/
    if (x==="August 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="August 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gabon'>Gabon</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gambia'>Gambia</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Georgia'>Georgia</a>)";

    };

    if (x==="August 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Germany'>Germany</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ghana'>Ghana</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gibraltar'>Gibraltar</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Great_Britain'>Great Britain</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greece'>Greece</a>)";
    };

    if (x==="August 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greenland'>Greenland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Grenada'>Grenada</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guadeloupe'>Guadeloupe</a>)";
    };

    if (x==="August 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guam'>Guam</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guatemala'>Guatemala</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea'>Guinea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea-Bissau'>Guinea-Bissau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guyana'>Guyana</a>";
    };

    if (x ==="August 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Haiti'>Haiti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Holy_See'>Holy See</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Honduras'>Honduras</a>";
    };

    if (x ==="August 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hong_Kong'>Hong Kong</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hungary'>Hungary</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iceland'>Iceland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/India'>India</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Indonesia'>Indonesia</a>";
        
    };

    if (x==="August 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iran'>Iran</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iraq'>Iraq</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ireland'>Ireland</a>";
    };

    if (x==="August 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Israel'>Israel</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Italy'>Italy</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jamaica'>Jamaica</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Japan'>Japan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jordan'>Jordan</a>";
    };

    if (x==="August 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kazakhstan'>Kazakhstan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kenya'>Kenya</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kiribati'>Kiribati</a>";
    };

    if (x==="August 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/North_Korea'>North Korea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Korea'>South Korea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kosovo'>Kosovo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kuwait'>Kuwait</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kyrgyzstan'>Kyrgyzstan</a>";
    };

    if (x==="August 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Laos'>Laos</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Latvia'>Latvia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lebanon'>Lebanon</a>";
    };

    if (x==="August 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lesotho'>Lesotho</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liberia'>Liberia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Libya'>Libya</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liechtenstein'>Liechtenstein</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lithuania'>Lithuania</a>";
    };

    if (x==="August 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Luxembourg'>Luxembourg</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macau'>Macau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macedonia'>Macedonia</a>";
    };

    if (x==="August 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Madagascar'>Madagascar</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malawi'>Malawi</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malaysia'>Malaysia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Maldives'>Maldives</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mali'>Mali</a>";
    };

    if (x==="August 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malta'>Malta</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Marshall_Islands'>Marshall Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Martinique'>Martinique</a>";
    };

    if (x==="August 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritania'>Mauritania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritius'>Mauritius</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mayotte'>Mayotte</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mexico'>Mexico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Micronesia'>Micronesia</a>";
    };

    if (x==="August 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Moldova'>Moldova</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Monaco'>Monaco</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mongolia'>Mongolia</a>";
    };

    if (x==="August 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montenegro'>Montenegro</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montserrat'>Montserrat</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Morocco'>Morocco</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mozambique'>Mozambique</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Myanmar'>Myanmar</a>";
    };

    if (x==="August 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Namibia'>Namibia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nauru'>Nauru</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nepal'>Nepal</a>";
    };

    if (x==="August 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands'>Netherlands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands_Antilles'>Netherlands Antilles</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="August 31st"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Caledonia'>New Caledonia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Zealand'>New Zealand</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nicaragua'>Nicaragua</a>";
    };

/*September*/
    if (x==="September 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="September 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niger'>Niger</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nigeria'>Nigeria</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niue'>Niue</a>)";

    };

    if (x==="September 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Northern_Mariana_Islands'>Northern Mariana Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Norway'>Norway</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Oman'>Oman</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pakistan'>Pakistan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palau'>Palau</a>)";
    };

    if (x==="September 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palestine'>Palestine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Panama'>Panama</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Papua_New_Guinea'>Papua New Guinea</a>)";
    };

    if (x==="September 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Paraguay'>Paraguay</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Peru'>Peru</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Philippines'>Philippines</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pitcairn_Islands'>Pitcairn Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Poland'>Poland</a>";
    };

    if (x ==="September 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Portugal'>Portugal</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Puerta_Rico'>Puerta Rico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Qatar'>Qatar</a>";
    };

    if (x ==="September 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Réunion'>Réunion</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Romania'>Romania</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Russia'>Russia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Rwanda'>Rwanda</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Kitts'>Saint Kitts</a>";
        
    };

    if (x==="September 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Lucia'>Saint Lucia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines'>Saint Vincent</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Samoa'>Samoa</a>";
    };

    if (x==="September 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/San_Marino'>San Marino</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sao_Tome'>Sao Tome</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saudi_Arabia'>Saudi Arabia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Senegal'>Senegal</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Serbia'>Serbia</a>";
    };

    if (x==="September 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Seychelles'>Seychelles</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sierra_Leone'>Sierra Leone</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Singapore'>Singapore</a>";
    };

    if (x==="September 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovakia'>Slovakia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovenia'>Slovenia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Solomon_Islands'>Solomon Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Somalia'>Somalia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Africa'>South Africa</a>";
    };

    if (x==="September 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Sudan'>South Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Spain'>Spain</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sri_Lanka'>Sri Lanka</a>";
    };

    if (x==="September 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sudan'>Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Suriname'>Suriname</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Swaziland'>Swaziland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sweden'>Sweden</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Switzerland'>Switzerland</a>";
    };

    if (x==="September 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Syria'>Syria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Taiwan'>Taiwan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tajikistan'>Tajikistan</a>";
    };

    if (x==="September 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tanzania'>Tanzania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Thailand'>Thailand</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tibet'>Tibet</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Timor-Leste'>Timor-Leste</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Togo'>Togo</a>";
    };

    if (x==="September 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tokelau'>Tokelau</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tongo'>Tongo</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Trinidad'>Trinidad</a>";
    };

    if (x==="September 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tunisia'>Tunisia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkey'>Turkey</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkmenistan'>Turkmenistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tuvalu'>Tuvalu</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uganda'>Uganda</a>";
    };

    if (x==="September 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ukraine'>Ukraine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Arab_Emirates'>United Arab Emirates</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Kingdom'>United Kingdom</a>";
    };

    if (x==="September 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_States'>United States</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uruguay'>Uruguay</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="September 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uzbekistan'>Uzbekistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vanuata'>Vanuata</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Venezuela'>Venezuela</a>";
    };

    if (x==="September 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vietnam'>Vietnam</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Virgin_Islands'>Virgin Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Yemen'>Yemen</a>";
    };

    if (x==="September 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zambia'>Zambia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zimbabwe'>Zimbabwe</a>";
        
        $("#nation-3").addClass("hidden");
    };

/*October*/
    if (x==="October 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="October 2nd"){
        
        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";

    };

    if (x==="October 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Afghanistan'>Afghanistan</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Albania'>Albania</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Algeria'>Algeria</a>)";
    };

    if (x==="October 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/American_Samoa'>American Samoa</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Andorra'>Andorra</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Angola'>Angola</a>)";
    };

    if (x==="October 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Anguilla'>Anguilla</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antarctica'>Antarctica</a>)";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Antigua'>Antigua</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Argentina'>Argentina</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Armenia'>Armenia</a>)";
    };

    if (x==="October 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Aruba'>Aruba</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Australia'>Australia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Austria'>Austria</a>";
    };

    if (x ==="October 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Azerbaidjan'>Azerbaidjan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahamas'>Bahamas</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x ==="October 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bahrain'>Bahrain</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bangladesh'>Bangladesh</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Barbados'>Barbados</a>";
    };

    if (x==="October 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belarus'>Belarus</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belgium'>Belgium</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Belize'>Belize</a>";
        
    };

    if (x==="October 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Benin'>Benin</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bermuda'>Bermuda</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bhutan'>Bhutan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bolivia'>Bolivia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bosnia'>Bosnia</a>";
    };

    if (x==="October 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Botswana'>Botswana</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brazil'>Brazil</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Brunei'>Brunei</a>";
    };

    if (x==="October 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Bulgaria'>Bulgaria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burkina_Faso'>Burkina Faso</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Burundi'>Burundi</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cambodia'>Cambodia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cameroon'>Cameroon</a>";
    };

    if (x==="October 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Canada'>Canada</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cape_Verde'>Cape Verde</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cayman_Islands'>Cayman Islands</a>";
    };

    if (x==="October 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Central_African_Republic'>Central African Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chad'>Chad</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Chile'>Chile</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/China'>China</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Christmas_Island'>Christmas Island</a>";
    };

    if (x==="October 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cocos_(Keeling)_Islands'>Cocos Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Columbia'>Columbia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Comoros'>Comoros</a>";
    };

    if (x==="October 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo'>Democratic Republic of the Congo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Republic_of_the_Congo'>Republic of the Congo</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cook_Islands'>Cook Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Costa_Rica'>Costa Rica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ivory_Coast'>Ivory Coast</a>";
    };

    if (x==="October 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Croatia'>Croatia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cuba'>Cuba</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Cypress'>Cypress</a>";
    };

    if (x==="October 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Czech_Republic'>Czech Republic</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Denmark'>Denmark</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Djibouti'>Djibouti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominica'>Dominica</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Dominican_Republic'>Dominican Republic</a>";
    };

    if (x==="October 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/East_Timor'>East Timor</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ecuador'>Ecuador</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Egypt'>Egypt</a>";
    };

    if (x==="October 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/El_Salvador'>El Salvador/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Equatorial_Guinea'>Equatorial Guinea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Eritrea'>Eritrea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Estonia'>Estonia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ethiopia'>Ethiopia</a>";
    };

    if (x==="October 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Falkland_Islands'>Falkland Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Faroe_Islands'>Faroe Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Fiji'>Fiji</a>";
    };

    if (x==="October 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Finland'>Finland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/France'>France</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="October 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Guiana'>French Guiana</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Polynesia'>French Polynesia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/French_Southern_and_Antarctic_Lands'>French Southern and Antarctic Lands</a>";
    };

    if (x==="October 31st"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gabon'>Gabon</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gambia'>Gambia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Georgia'>Georgia</a>";
    };

/*November*/
    if (x==="November 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="November 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Germany'>Germany</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ghana'>Ghana</a>)";
        
        $("#nation-3").addClass("hidden");

    };

    if (x==="November 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Gibraltar'>Gibraltar</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Great_Britain'>Great Britain</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greece'>Greece</a>)";
    };

    if (x==="November 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Greenland'>Greenland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Grenada'>Grenada</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guadeloupe'>Guadeloupe</a>)";
    };

    if (x==="November 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guam'>Guam</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guatemala'>Guatemala</a>)";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea'>Guinea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guinea-Bissau'>Guinea-Bissau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Guyana'>Guyana</a>)";
    };

    if (x==="November 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Haiti'>Haiti</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Holy_See'>Holy See</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Honduras'>Honduras</a>";
    };

    if (x ==="November 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hong_Kong'>Hong Kong</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Hungary'>Hungary</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x ==="November 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iceland'>Iceland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/India'>India</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Indonesia'>Indonesia</a>";
    };

    if (x==="November 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iran'>Iran</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Iraq'>Iraq</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ireland'>Ireland</a>";
        
    };

    if (x==="November 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Israel'>Israel</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Italy'>Italy</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jamaica'>Jamaica</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Japan'>Japan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Jordan'>Jordan</a>";
    };

    if (x==="November 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kazakhstan'>Kazakhstan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kenya'>Kenya</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kiribati'>Kiribati</a>";
    };

    if (x==="November 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/North_Korea'>North Korea</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Korea'>South Korea</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kosovo'>Kosovo</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kuwait'>Kuwait</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Kyrgyzstan'>Kyrgyzstan</a>";
    };

    if (x==="November 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Laos'>Laos</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Latvia'>Latvia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lebanon'>Lebanon</a>";
    };

    if (x==="November 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lesotho'>Lesotho</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liberia'>Liberia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Libya'>Libya</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Liechtenstein'>Liechtenstein</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Lithuania'>Lithuania</a>";
    };

    if (x==="November 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Luxembourg'>Luxembourg</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macau'>Macau</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Macedonia'>Macedonia</a>";
    };

    if (x==="November 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Madagascar'>Madagascar</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malawi'>Malawi</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malaysia'>Malaysia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Maldives'>Maldives</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mali'>Mali</a>";
    };

    if (x==="November 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Malta'>Malta</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Marshall_Islands'>Marshall Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Martinique'>Martinique</a>";
    };

    if (x==="November 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritania'>Mauritania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mauritius'>Mauritius</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mayotte'>Mayotte</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mexico'>Mexico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Micronesia'>Micronesia</a>";
    };

    if (x==="November 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Moldova'>Moldova</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Monaco'>Monaco</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mongolia'>Mongolia</a>";
    };

    if (x==="November 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montenegro'>Montenegro/a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Montserrat'>Montserrat</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Morocco'>Morocco</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Mozambique'>Mozambique</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Myanmar'>Myanmar</a>";
    };

    if (x==="November 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Namibia'>Namibia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nauru'>Nauru</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nepal'>Nepal</a>";
    };

    if (x==="November 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands'>Netherlands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands_Antilles'>Netherlands Antilles</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="November 30th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Caledonia'>New Caledonia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/New_Zealand'>New Zealand</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nicaragua'>Nicaragua</a>";
    };

/*December*/
    if (x==="December 1st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };

    if (x==="December 2nd"){
        
        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niger'>Niger</a>)";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Nigeria'>Nigeria</a>)";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Niue'>Niue</a>)";

    };

    if (x==="December 3rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Northern_Mariana_Islands'>Northern Mariana Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Norway'>Norway</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 4th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Oman'>Oman</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pakistan'>Pakistan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palau'>Palau</a>)";
    };

    if (x==="December 5th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Palestine'>Palestine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Panama'>Panama</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Papua_New_Guinea'>Papua New Guinea</a>)";
    };

    if (x==="December 6th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Paraguay'>Paraguay</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Peru'>Peru</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 7th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Philippines'>Philippines</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Pitcairn_Islands'>Pitcairn Islands</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Poland'>Poland</a>";
    };

    if (x ==="December 8th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Portugal'>Portugal</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Puerta_Rico'>Puerta Rico</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Qatar'>Qatar</a>";
    };

    if (x ==="December 9th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Réunion'>Réunion</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Romania'>Romania</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 10th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Russia'>Russia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Rwanda'>Rwanda</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Kitts'>Saint Kitts</a>";
        
    };

    if (x==="December 11th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Lucia'>Saint Lucia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines'>Saint Vincent</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Samoa'>Samoa</a>";
    };

    if (x==="December 12th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/San_Marino'>San Marino</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sao_Tome'>Sao Tome</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 13th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Saudi_Arabia'>Saudi Arabia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Senegal'>Senegal</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Serbia'>Serbia</a>";
    };

    if (x==="December 14th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Seychelles'>Seychelles</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sierra_Leone'>Sierra Leone</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Singapore'>Singapore</a>";
    };

    if (x==="December 15th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovakia'>Slovakia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Slovenia'>Slovenia</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 16th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Solomon_Islands'>Solomon Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Somalia'>Somalia</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Africa'>South Africa</a>";
    };

    if (x==="December 17th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/South_Sudan'>South Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Spain'>Spain</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sri_Lanka'>Sri Lanka</a>";
    };

    if (x==="December 18th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sudan'>Sudan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Suriname'>Suriname</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 19th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Swaziland'>Swaziland</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Sweden'>Sweden</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Switzerland'>Switzerland</a>";
    };

    if (x==="December 20th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Syria'>Syria</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Taiwan'>Taiwan</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tajikistan'>Tajikistan</a>";
    };

    if (x==="December 21st"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tanzania'>Tanzania</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Thailand'>Thailand</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 22nd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tibet'>Tibet</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Timor-Leste'>Timor-Leste</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Togo'>Togo</a>";
    };

    if (x==="December 23rd"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tokelau'>Tokelau</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tongo'>Tongo</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Trinidad'>Trinidad</a>";
    };

    if (x==="December 24th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tunisia'>Tunisia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkey'>Turkey</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 25th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Turkmenistan'>Turkmenistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Tuvalu'>Tuvalu</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uganda'>Uganda</a>";
    };

    if (x==="December 26th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Ukraine'>Ukraine</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Arab_Emirates'>United Arab Emirates</a>";
        
        document.getElementById("nation-3").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_Kingdom'>United Kingdom</a>";
    };

    if (x==="December 27th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/United_States'>United States</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uruguay'>Uruguay</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 28th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Uzbekistan'>Uzbekistan</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vanuata'>Vanuata</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Venezuela'>Venezuela</a>";
    };

    if (x==="December 29th"){

        document.getElementById("nation-1").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Vietnam'>Vietnam</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Virgin_Islands'>Virgin Islands</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Yemen'>Yemen</a>";
    };

    if (x==="December 30th"){

        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zambia'>Zambia</a>";
        
        document.getElementById("nation-2").innerHTML = "<a target='_blank' href='https://en.wikipedia.org/wiki/Zimbabwe'>Zimbabwe</a>";
        
        $("#nation-3").addClass("hidden");
    };

    if (x==="December 31st"){

        document.getElementById("nation-1").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-2").innerHTML = "Choose a Nation";
        
        document.getElementById("nation-3").innerHTML = "Choose a Nation";
    };