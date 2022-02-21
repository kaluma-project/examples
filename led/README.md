# Overview

An example to turn on the external LED.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | Half-size  |
| LED               | 1         | red  |
| Resistor          | 1         | 330 Ohm |
| Jumper wires      |           |      |

# Wiring

| Raspberry Pi Pico | LED     | Resistor |
| ----------------- | ------- | -------- |
| GND               | cathode |          |
|                   | anode   | any      |
| GP15              |         | any      |

![wiring](https://github.com/kaluma-project/examples/blob/main/led/wiring.png?raw=true)

# Code

Turn on the LED connected to the GP15 pin.

```js
const pin = 15;
pinMode(pin, OUTPUT);
digitalWrite(pin, HIGH);
```

# See also

- [pinMode()](https://kalumajs.org/docs/api/digital-io#pinmode)
- [digitalWrite()](https://kalumajs.org/docs/api/digital-io#digitalwrite)