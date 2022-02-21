# Overview

An example to control a 1-channel relay switch.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | mini |
| LED               | 1         | red  |
| Resistor          | 1         | 330 Ohm |
| Relay switch      | 1         | KY-019  |
| Jumper wires      |           |      |

# Wiring

| Raspberry Pi Pico | Relay | LED     | Resistor |
| ----------------- | ----- | ------- | -------- |
| VBUS              | +     |         |          |
| GND               | -     | cathode |          |
|                   |       | anode   | another  | 
| GP0               | IN    |         |          |
| 3V3               | COM   |         |          |
|                   | NO    |         | one      |

![wiring](https://github.com/kaluma-project/examples/blob/main/relay-switch/wiring.jpg?raw=true)

# Code

Turn on and off the LED for every 3 seconds using a relay switch.

```js
const pin = 0;
pinMode(pin, OUTPUT);
setInterval(() => {
  digitalToggle(pin);
}, 3000);
```

# See also

- [pinMode()](https://kalumajs.org/docs/api/digital-io#pinmode)
- [digitalToggle()](https://kalumajs.org/docs/api/digital-io#digitaltoggle)



