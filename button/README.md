# Overview

An example to catch button click event. When you press the push button, "click!" message is printed on console (Terminal).

# Components

| Part               | Quantity  | Note | 
| ------------------ | --------- | ---- |
| Raspberry Pi Pico  | 1         |      |
| Breadboard         | 1         | Half-size  |
| Push button switch | 1         |      |
| Jumper wires       |           |      |

# Wiring

| Raspberry Pi Pico | Push button switch | 
| ----------------- | ------- |
| GND               | a leg (pin 1/2)   |
| GP14              | another leg (pin 3/4) |

![wiring](https://github.com/kaluma-project/examples/blob/main/button/wiring.jpg?raw=true)

# Using setWatch()

Watch the state changes on the pin (GP14) in the main I/O loop. If the state changed from `HIGH` to `LOW` (`FALLING`), then print "click!" message on the console. To remove noise signals 50ms debouncing time is given.

```js
var pin = 14;
pinMode(pin, INPUT_PULLUP);
var id = setWatch(() => {
  console.log('click!');
}, pin, FALLING, 50);

// When you don't need the event anymore
clearWatch(id);
```

If you wire the pin to 3V3 instead of GND and set the pin mode to `INPUT_PULLDOWN`, you can get the same function by providing `RISING` argument to `setWatch()`.

# Using Button class

```js
var Button = require('button').Button;
var btn = new Button(14);
btn.on('click', () => {
  console.log('button clicked!');
});

// When you don't need the event anymore
btn.close();
```

# See also

- [setWatch()](https://kalumajs.org/docs/api/digital-io#setwatch)
- [Button](https://kalumajs.org/docs/api/button)
  