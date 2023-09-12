let output = document.getElementById("currentDayOfTheWeek");
let numberdate = document.getElementById("currentUTCTime");

let d = new Date();
console.log(d);
let day = d.getDay();
let ndate = d.toUTCString();

switch (day){
    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "Monday"
        break;

    case 2:
        day = "Tuesday"
        break;

    case 3:
        day = "Wednesday"
        break;

    case 4:
        day = "Thursday"
        break;

    case 5:
        day = "Friday"
        break;

    case 6:
        day = "Saturday"
        break;
}

output.innerHTML = day;
currentUTCTime.innerHTML = ndate;