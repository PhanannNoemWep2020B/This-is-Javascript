//clock
var clock = () =>{
    let day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let seconde = day.getSeconds();

    let timer = document.getElementById("timer");
    if(hour < 12){
        timer.innerHTML = hour + " : " + minute + " : " + seconde + " AM";
    }else{
        timer.innerHTML = hour + " : " + minute + " : " + seconde + " PM";
    }
}
 setInterval(clock, 1000); 
 //date
 var displayDate = () => {
    let allMonths = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let allDays = ['Sunday', 'Monday', 'Tuesday', 'Thuesday', 'Friday', 'Statuday'];
    let myDate = new Date();
    let myday = myDate.getDay();
    let mymonth = myDate.getMonth();
    let year = myDate.getFullYear();
    let displayDay = " ";
    let displayMonth = " ";
    for(let i = 0; i < allDays.length; i++){
        switch(myday){
        case i:
        displayDay = allDays[i];
        break;
        }
    }
    for(let i = 0; i < allMonths.length; i++){
        switch(mymonth){
            case i:
            displayMonth = allMonths[i];
            break;
        }
    }
    let result = document.querySelector('h1');
    result.innerHTML = displayDay + " / " + displayMonth + " / " + year;
}
displayDate();