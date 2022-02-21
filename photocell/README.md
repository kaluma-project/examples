# Overview

An example to detect brightness using a photocell.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | Half-size  |
| Resistor          | 1         | 10K Ohm |
| Photocell         | 1         | CdS     |
| Jumper wires      |           |      |

# Wiring

| Raspberry Pi Pico | Photocell | Resistor |
| ----------------- | --------- | -------- |
| 3V3               | L1        |          |
| GP26              | L2        | L1       |
| GND               |           | L2       |

![wiring](https://github.com/kaluma-project/examples/blob/main/photocell/wiring.jpg?raw=true)

# Code

This code reads analog value from a photocell and print in console on every seconds.

```js
const pin = 26; // ADC0
setInterval(() => {
  let value = analogRead(pin);
  console.log(value);
}, 1000);
```

# See also

- [analogRead()](https://kalumajs.org/docs/api/analog-io#analogread)
- [setInterval()](https://kalumajs.org/docs/api/timers#setinterval)
