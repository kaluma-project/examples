const cyw43_arch = require('cyw43_arch');
const led = 0
let state = 1;

setInterval(() => {
  cyw43_arch.gpioPut(led, state);
  state = (state + 1 ) % 2; // Toggle between 1 and 0
}, 1000);
