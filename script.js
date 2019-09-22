
var mName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var fName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC, YY, MM, d, name;
var year, month, day, gn;
    
    function compile(){
        validate();
        findGender();
        calculateDay();
        // document.getElementById('output').textContent = compile("Your akan name is" + calculateDay()); 
        document.getElementById("output").innerHTML = ("Your Akan-name is " + calculateDay() + " !!");
}

function validate(){
    var year= document.forms["myForm"]["yr"].value;
    var month= document.forms["myForm"]["mth"].value;
    var day= document.forms["myForm"]["dat"].value;
    var gn = findGender();
    
    if(year==""){
        alert("Enter valid year");
        return false;
    }
    if(month=="" || month<0 || month>12){
        alert("Enter valid month");
        return false;
    }
    if(day=="" || day<0 || day>31){
        alert("Enter valid day of birth");
        return false;
    }
    if(gn[0].checked== false && gn[1].checked==false){
        alert("Enter your gender")
        return false;
    }
    else{
        return true;
    }

}

function findGender(){
    var gender = document.getElementsByName("gender");
    for(i =0; i<gender.length; i++){
        if (gender[i].checked){
            return(gender[i].value);
        }
    }
}

function calculateDay(){
    var name="";
    var gn = findGender();   
    year=document.forms["myForm"]["yr"].value;
    MM=document.forms["myForm"]["mth"].value;
    DD=document.forms["myForm"]["dat"].value;
    var date= new Date(year+ "/" +MM +"/" +DD);
    var day = date.getDay();

    if (gn ==="male"){
        name=mName[day]
    }
    else{
        name=fName[day]
    }
    return name; 

}

        