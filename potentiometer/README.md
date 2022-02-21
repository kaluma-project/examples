# Overview

This example shows how to read analog value with a potentiometer.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | Half-size  |
| Potentiometer     | 1         |      |
| Jumper wires      |           |      |

# Wiring

| Raspberry Pi Pico | Potentiometer | 
| ----------------- | ------------- |
| GND               | -             |
| 3V3               | +             |
| GP26 (ADC0)       | OUT (middle)  |

![wiring](https://github.com/kaluma-project/examples/blob/main/potentiometer/wiring.png?raw=true)

# Code

It reads potentiometer value using `analogRead()` every 0.1 seconds and print the value on the console only if the value is changed over than 0.1.

```js
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
```

# See also

- [analogRead()](https://kalumajs.org/docs/api/analog-io#analogread)