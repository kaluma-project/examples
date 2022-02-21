# Overview

A LED dimmer example with potentiometer.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | Half-size  |
| LED               | 1         | red  |
| Resistor          | 1         | 330 Ohm |
| Potentiometer     | 1         |      |
| Jumper wires      |           |      |

# Wiring

| Raspberry Pi Pico | LED     | Resistor | Potentiometer |
| ----------------- | ------- | -------- | ------------- |
| 3V3               |         |          | +             |
| GND               | cathode |          | -             |
|                   | anode   | any      |               |
| GP15              |         | any      |               |
| GP26 (ACD0)       |         |          | OUT (middle)  |

![wiring](https://github.com/kaluma-project/examples/blob/main/led-dimmer/wiring.png?raw=true)

# Code

This code reads analog value from the potentiometer and set the brightness of the LED.

```js
const led = 15;
const po = 26; // potentiometer

setInterval(function () {
  let val = analogRead(po);
  analogWrite(led, val);
}, 100);
```

# See also

- [analogRead()](https://kalumajs.org/docs/api/analog-io#analogread)
- [analogWrite()](https://kalumajs.org/docs/api/analog-io#analogwrite)
- [setInterval()](https://kalumajs.org/docs/api/timers#setinterval)