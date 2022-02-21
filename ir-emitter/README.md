# Overview

This example shows how to transmit IR signals read from a remote controller.

# Components

| Part              | Quantity  | Note | 
| ----------------- | --------- | ---- |
| Raspberry Pi Pico | 1         |      |
| Breadboard        | 1         | mini |
| Push button       | 1         |      |
| IR LED            | 1         | 940nm  |
| IR receiver       | 1         | TSOP38438 (or TSOP1838) 38KHz |
| Remote controller | 1         | NEC type (38KHz) |
| Jumper wires      |           |      |

# Wiring

| Raspberry Pi Pico | IR receiver | IR LED  | Button |
| ----------------- | ----------- | ------- | ------ |
| 3V3               | VCC         |         | L1     |
| GND               | GND         |         |        |
| GP15              | OUT         |         |        |
| GP16              |             | anode   |        |
| GP17              |             | cathode |        |
| GP14              |             |         | L2     |

![wiring](https://github.com/kaluma-project/examples/blob/main/ir-emitter/wiring.png?raw=true)

# Code

When you send IR signal to the IR receiver using a remote controller (38KHz), the signal pulse is stored in the `memory` variable. Then, it sends the stored IR signal whenever you press the button.

```js
const {IRReceiver} = require('ir-receiver');

let memory = null;  // to store received IR signal
let recv = 15;      // pin for IR receiver
let led_pulse = 16; // pin for IR LED digital pulse
let led_pwm = 17;   // pin for IR LED 38KHz carrier
let btn = 14;       // pin for button

pinMode(recv, INPUT_PULLUP);
pinMode(led_pulse, OUTPUT);
pinMode(btn, INPUT_PULLDOWN);

// receive IR signal and save to memory
let ir = new IRReceiver(recv);
ir.on('data', (data, bits, pulse) => {
  console.log('IR signal received.');
  console.log(`- data: ${data.toString(16)} (${bits} bits)`);
  console.log(`- pulse(${pulse.length}): [${pulse.join(',')}]`);
  memory = pulse;
});

// send IR signal stored in memory
function send() {
  analogWrite(led_pwm, 0.5, 38000); // 38KHz
  pulseWrite(led_pulse, HIGH, memory);
  digitalWrite(led_pulse, LOW);
  console.log('Sent IR signal.');
}

// send signal when button pressed
setWatch(send, btn, RISING, 10);
```

# See also

- [`ir-receiver`](https://github.com/niklauslee/ir-receiver)

# References

- https://learn.adafruit.com/using-an-infrared-library/sending-ir-codes
- https://www.raspberry-pi-geek.com/Archive/2015/10/Raspberry-Pi-IR-remote
