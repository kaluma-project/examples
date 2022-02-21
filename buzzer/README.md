# Overview

A piezo buzzer example plays notes.

__Note frequency chart__

| Note \ Octave | O0 | O1 | O2  | O3  | O4  | O5  | O6   | O7   | O8   |
| ------------- | -- | -- | --- | --- | --- | --- | ---- | ---- | ---- |
| C             |    | 33 | 65  | 131 | 262 | 523 | 1047 | 2093 | 4186 |
| C#            |    | 35 | 69  | 139 | 277 | 554 | 1109 | 2217 | 4435 |
| D             |    | 37 | 73  | 147 | 294 | 587 | 1175 | 2349 | 4699 |
| D#            |    | 39 | 78  | 156 | 311 | 622 | 1245 | 2489 | 4978 |
| E             |    | 41 | 82  | 165 | 330 | 659 | 1319 | 2637 |      |
| F             |    | 44 | 87  | 175 | 349 | 698 | 1397 | 2794 |      |
| F#            |    | 46 | 93  | 185 | 370 | 740 | 1480 | 2960 |      |
| G             |    | 49 | 98  | 196 | 392 | 784 | 1568 | 3136 |      |
| G#            |    | 52 | 104 | 208 | 415 | 831 | 1661 | 3322 |      |
| A             |    | 55 | 110 | 220 | 440 | 880 | 1760 | 3520 |      |
| A#            |    | 58 | 117 | 233 | 466 | 932 | 1865 | 3729 |      |
| B             | 31 | 62 | 123 | 247 | 494 | 988 | 1976 | 3951 |      |

# Components

| Part               | Quantity  | Note | 
| ------------------ | --------- | ---- |
| Raspberry Pi Pico  | 1         |      |
| Breadboard         | 1         | Half-size  |
| Piezo buzzer       | 1         | Passive and work with 3.3V     |
| Jumper wires       |           |      |

# Wiring

| Raspberry Pi Pico | Piezo buzzer  | 
| ----------------- | ------------- |
| GND               | -             |
| GP12              | +             |

![wiring](https://github.com/kaluma-project/examples/blob/main/buzzer/wiring.png?raw=true)

# Code

Plays notes C4, D4, E4, F4, G4, A4, B4 and C5 by generating sound pulse using `tone()`. You can do the same thing with [PWM](https://kalumajs.org/docs/api/pwm).

```js
var pin = 12;
tone(pin, 262); // C4
delay(500);
tone(pin, 294); // D4
delay(500);
tone(pin, 330); // E4
delay(500);
tone(pin, 370); // F4
delay(500);
tone(pin, 392); // G4
delay(500);
tone(pin, 440); // A4
delay(500);
tone(pin, 466); // B4
delay(500);
tone(pin, 523); // C5
delay(500);
noTone(pin);
```

# See also

- [tone()](https://kalumajs.org/docs/api/analog-io#tone)
- [PWM](https://kalumajs.org/docs/api/pwm)