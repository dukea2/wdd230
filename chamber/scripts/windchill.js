const t = document.getElementById("current-temp").innerText;
const s = document.getElementById("weather-wind").innerText;

if (t <= 50 && s > 3) {
    f = Math.round(35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + (0.4275 * t * (s**0.16))) + "°F";
}
else {
    f = "n/a";
}

document.getElementById("windchill").innerHTML = f;