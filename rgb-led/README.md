# Overview

An example shows how to set color for a RGB LED.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | Half-size  |
| RGBLED            | 1         | Common Cathode |
| Resistor          | 3         | 330 Ohm |
| Jumper wires      |           |      |

# Wiring

The pins for red, green and blue should not share the [PWM slices](https://kalumajs.org/docs/boards/rp2/#pwm).

| Raspberry Pi Pico | RGB LED | R1 | R2 | R3 |
| ----------------- | ------- | -- | -- | -- |
| GND               | cathode |    |    |    |
|                   | R       | L1 |    |    |
| GP0               |         | L2 |    |    |
|                   | G       |    | L1 |    |
| GP2               |         |    | L2 |    |
|                   | B       |    |    | L1 |
| GP4               |         |    |    | L2 |

![wiring](https://github.com/kaluma-project/examples/blob/main/rgb-led/wiring.jpg?raw=true)

# Code

This code set a random color of the RGB LED for every second.

```js
const r = 0; // GP0
const g = 2; // GP1
const b = 4; // GP2

function setColor(red, green, blue) {
  analogWrite(r, red);
  analogWrite(g, green);
  analogWrite(b, blue);
}

setInterval(() => {
  let rv = Math.random();
  let gv = Math.random();
  let bv = Math.random();
  setColor(rv, gv, bv);
  console.log(`random color: r=${rv.toFixed(2)},g=${gv.toFixed(2)},b=${bv.toFixed(2)}`);
}, 1000);
```

# See also

- [pinMode()](https://kalumajs.org/docs/api/digital_io#pinmode)
- [analogWrite()](https://kalumajs.org/docs/api/analog-io#analogwrite)