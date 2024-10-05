
function calculate() {
    const dayValue = document.getElementById("day").value;
    const monthValue = document.getElementById("month").value;
    const yearValue = document.getElementById("year").value;
    console.log(dayValue);
    console.log(monthValue);
    console.log(yearValue);
    let dateBirth = new Date(yearValue,(monthValue-1),dayValue).getTime();
    let today = new Date().getTime();

    let result = today-dateBirth;

    //Conversión 

    let differenceDays = Math.floor(result/(1000*60*60*24));
    let finalYears = Math.floor(differenceDays/365.25);
    let finalMonths = Math.floor((differenceDays%365.25)/30.44);
    let finalDays=Math.round(differenceDays%30.44);


    //Mostrando datos en Pantalla
    
    document.getElementById("finalYear").innerHTML=finalYears;
    document.getElementById("finalMonth").innerHTML=finalMonths;
    document.getElementById("finalDay").innerHTML=finalDays;

    if (finalYears<10)  {
    document.getElementById("finalYear").innerHTML="0"+finalYears;

    } 
    
    if(finalMonths<10){
    document.getElementById("finalMonth").innerHTML="0"+finalMonths;

    }

    if(finalDays<10){
    document.getElementById("finalDay").innerHTML="0"+finalDays;

    }
}