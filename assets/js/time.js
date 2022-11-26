function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";

    period = hour >= 12 ? "PM" : "AM";

    hour = update(hour);
    minute = update(minute);
    second = update(second);
    document.getElementById("clock").innerText = hour + " : " + minute + " : " + second + " " + period;
}

function update(t) {
    return t < 10 ? "0" + t : t;
}

var time = setInterval(Time, 1000);

