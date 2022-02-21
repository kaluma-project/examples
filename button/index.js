var pin = 14;
pinMode(pin, INPUT_PULLUP);
setWatch(() => {
  console.log('click!');
}, pin, FALLING, 50);
