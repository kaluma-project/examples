const pir = 28; // PIR (GP28)
const led = 15; // LED (GP15)

pinMode(pir, INPUT);
pinMode(led, OUTPUT);

setInterval(function () {
  let motion = digitalRead(pir);
  if (motion === HIGH) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
}, 100);
