const timer = document.getElementById("cookie");

function clickerTimer() {

    let startClickTimer = parseInt(document.getElementById("clicker__counter").textContent, 10);
    let newTimer = startClickTimer + 1;
    document.getElementById("clicker__counter").textContent = newTimer;
    if (timer.width <= 200) {
        timer.width = 300;
    } else {
        timer.width = 200;
    }
}
timer.onclick = clickerTimer;