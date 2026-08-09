const alert = document.querySelector('#alert-badge');
const currentHour = new Date().getHours();

if (currentHour >= 13  || currentHour < 2) {
    alert.textContent = 'OPEN';
} else {
    alert.textContent = 'CLOSED';
}