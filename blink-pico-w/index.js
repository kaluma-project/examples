var led = 0
const cyw43_arch = require('cyw43_arch');

cyw43_arch.gpioPut(led, 1);
setInterval(() => {
  cyw43_arch.gpioPut(led, 0);
}, 1000);