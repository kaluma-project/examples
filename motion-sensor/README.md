# Overview

An example to detect human motion.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | Half-size  |
| Motion sensor     | 1         | HC-SR501 |
| LED               | 1         | red  |
| Resistor          | 1         | 330 Ohm |
| Jumper wires      |           |      |

# Wiring

| Raspberry Pi Pico | LED     | Resistor | Motion sensor |
| ----------------- | ------- | -------- | ------------- |
| VBUS              |         |          | +             |
| GND               | cathode |          | -             |
|                   | anode   | v        |               |
| GP15              |         | v        |               |
| GP28              |         |          | OUT           |

![wiring](https://github.com/kaluma-project/examples/blob/main/motion-sensor/wiring.jpg?raw=true)

# Code

This code reads the state of motion sensor every 100ms and turn on LED when motion detected.

```js
const pir = 28; // PIR (GP28)
const led = 15; // LED (GP15)

pinMode(pir, INPUT);
pinMode(led, OUTPUT);

setInterval(function () {
  let motion = digitalRead(pir);
  if (motion === HIGH) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
}, 100);
```

# See also

- [digitalRead()](https://kalumajs.org/docs/api/digital-io#digitalread)
- [digitalWrite()](https://kalumajs.org/docs/api/digital-io#digitalwrite)