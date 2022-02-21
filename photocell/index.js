const pin = 26; // ADC0
setInterval(() => {
  let value = analogRead(pin);
  console.log(value);
}, 1000);
