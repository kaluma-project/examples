# Overview

A blink example for Raspberry Pi Pico.

# Code

Turn on and off the on-board LED for every seconds.

```js
var led = 25;
pinMode(led, OUTPUT);
setInterval(() => {
  digitalToggle(led);
}, 1000);
```

# See also

- [pinMode()](https://kalumajs.org/docs/api/digital-io#pinmode)
- [digitalToggle()](https://kalumajs.org/docs/api/digital-io#digitaltoggle)
- [setInterval()](https://kalumajs.org/docs/api/timers#setinterval)
