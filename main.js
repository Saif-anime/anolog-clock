var body = document.querySelector('body')
var hourhand = document.querySelector('.hour')
var minutehand = document.querySelector('.minute')
var secondHand = document.querySelector('.second')

var mode_switch = document.querySelector('.mode-switch')





mode_switch.addEventListener('click', () =>{

    // toggle the "dark" class on the body on element 
    body.classList.toggle('dark')
    // check if the dark class is curently present on the body element 
    const isDarkMode = body.classList.contains('dark')
mode_switch.textContent = isDarkMode ? "Light Mode":"Dark Mode";
})

const updateTime = () =>{
    // Get current time and cacluate degress for clock hands 
    let date = new Date();
    secToDeg = (date.getSeconds()/60) * 360
    minTodeg = (date.getMinutes() / 60) *360
    hrToDeg = (date.getHours() / 12) * 360;
    // Rote the clock hands to the appropriate degree based on the current time 
    // console.log(secToDeg)

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minutehand.style.transform = `rotate(${minTodeg}deg)`;
    hourhand.style.transform = `rotate(${hrToDeg}deg)`;
}



// call updateTime to seet clock hands every seconds 
setInterval(updateTime, 1000) // 1000 mean 1s

// call updateTime function when page load 
updateTime();