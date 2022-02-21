var pin = 0;
pinMode(pin, OUTPUT);
setInterval(() => {
  digitalToggle(pin);
}, 3000);
