// function updateClock() {
    // const clockDiv = document.getElementById('quickSettingsClock');
    // const now = new Date();
    // const hours = now.getHours().toString().padStart(2, '0');
    // const minutes = now.getMinutes().toString().padStart(2, '0');
    // clockDiv.innerHTML = `${hours} : ${minutes}`;
// }

function updateClock() {
    const timeDiv = document.querySelector('#quickSettingsClock .time');
    const dayDiv = document.querySelector('#quickSettingsClock .am-pm');

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours.toString().padStart(2, '0');

    timeDiv.innerHTML = `${hours} : ${minutes}`;
    dayDiv.innerHTML = `${ampm}`;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);