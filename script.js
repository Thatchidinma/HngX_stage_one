const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayIndex = currentDate.getDay();
const dayName = daysOfWeek[dayIndex];
document.getElementById('day').textContent = "day of the week: " + dayName;

function updateUTCTime() {
    const currentUTC = new Date().getTime();
    document.getElementById("time").textContent = "UTC Time: " + currentUTC;
}
updateUTCTime();
setInterval(updateUTCTime, 1000);

