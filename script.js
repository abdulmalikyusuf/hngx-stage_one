// const daysOfWeek = {
//     0: "Monday",
//     1: "Tuesday",
//     2: "Wednesday",
//     3: "Thursday",
//     4: "Friday",
//     5: "Saturday",
//     6: "Sunday"
// }
// const timeEl = document.getElementById("currentTime")
// const dayOfTheWeekEl = document.getElementById("currentDayOfTheWeek")

// const time = new Date()
// const currentDay = time.getDay()
// const currentTime = time.toDateString()

// dayOfTheWeekEl.innerHTML += `: ${daysOfWeek[currentDay]}`
// timeEl.setAttribute("datetime", time.toJSON())
// timeEl.innerHTML += `: ${currentTime}`

// script.js
function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const time = now.toUTCString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" });
    // Update the elements with the current data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `${time} milliseconds: ${now.getUTCMilliseconds()}`;

    // Update the time every second
    setTimeout(updateDateTime, 1000);
}

updateDateTime();
