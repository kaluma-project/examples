const pin = 26; // ADC0
let value = 0;

setInterval(function () {
  let p = analogRead(pin);
  let delta = Math.abs(value - p);
  if (delta > 0.01) {
    value = p;
    console.log(value);
  }
}, 100);
