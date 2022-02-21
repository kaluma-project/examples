var led = 25;
pinMode(led, OUTPUT);
setInterval(() => {
  digitalToggle(led);
}, 1000);
