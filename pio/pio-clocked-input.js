/**
 * On your Pico you need to connect jumper wires to these pins:
 * GPIO 2 -> GPIO 5 (clock output to clock input)
 * GPIO 3 -> GPIO 4 (data output to data input)
 */

const {PIO, ASM, StateMachine} = require('rp2');
const {SPI} = require('spi');

var spiOptions = { // SPI options
  mode: SPI.MODE_0,  
  baudrate: 800000,
  bitorder: SPI.MSB,
  clk:2,
  mosi:3,
};
var spi0 = new SPI(0, spiOptions);

const asm = new ASM();
asm
  .wait(0, 'pin', 1)
  .wait(1, 'pin', 1)
  .in('pins', 1);

const options = {
  inBase: 4,
  inCount: 2,
  fifoJoin: PIO.FIFO_JOIN_RX,
  inShiftDir: PIO.SHIFT_LEFT,
  autopush: true,
  pushThreshold: 8,
};
const sm = new StateMachine(0, asm, options);
sm.active(true);

// Send 8 bytes with an array of numbers
var array = new Uint8Array([0x6b, 0x12, 0x23, 0x34, 0x45, 0x56, 0x67, 0x78]);
spi0.send(array);
console.log(array);

var value = 0;
for (var i = 0; i < 8; i++) {
  value = sm.get();
  console.log(value);
}
