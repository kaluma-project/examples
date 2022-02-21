const led = 15;
const po = 26; // potentiometer

setInterval(function () {
  let val = analogRead(po);
  analogWrite(led, val);
}, 100);
