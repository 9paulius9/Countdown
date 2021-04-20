const daysVar = document.getElementById("idDays");
const hoursVar = document.getElementById("idHours");
const minutesVar = document.getElementById("idMinutes");
const secondsVar = document.getElementById("idSeconds");
const customDate= "25 December 2021";

function countdown()
{
    const finishDate = new Date(customDate);
    const currentDate = new Date();
    const allSeconds = (finishDate - currentDate)/1000;
    
    const days = Math.floor(allSeconds / 3600 / 24);
    const hours = Math.floor((allSeconds / 3600) % 24);
    const minutes = Math.floor(allSeconds / 60) % 60;
    const seconds = Math.floor(allSeconds % 60);

    daysVar.innerText = days;
    hoursVar.innerHTML = hours;
    minutesVar.innerHTML = minutes;
    secondsVar.innerHTML = seconds;
}
countdown();
setInterval(countdown,1000);

