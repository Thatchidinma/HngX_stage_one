const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayIndex = currentDate.getDay();
const dayName = daysOfWeek[dayIndex];
document.getElementById('day').textContent = dayName;

