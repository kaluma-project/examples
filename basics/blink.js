/**
 * Example: Blink
 * blinking the on-board LED every second.
 */

const led = 25;
pinMode(led, OUTPUT);
setInterval(() => {
  digitalToggle(led);
}, 1000);
