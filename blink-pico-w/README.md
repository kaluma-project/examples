# Overview

A blink example for Raspberry Pi Pico W. Contrary to the regular Pico, the LED on this board is connected to the WiFi chip (CYW43).

# Code

Turn on and off the on-board LED for every seconds.

```js
var led = 0
const cyw43_arch = require('cyw43_arch');

cyw43_arch.gpioPut(led, 1);
setInterval(() => {
  cyw43_arch.gpioPut(led, 0);
}, 1000);
```

# See also

- [pinMode()](https://kalumajs.org/docs/api/digital-io#pinmode)
- [digitalToggle()](https://kalumajs.org/docs/api/digital-io#digitaltoggle)
- [setInterval()](https://kalumajs.org/docs/api/timers#setinterval)
