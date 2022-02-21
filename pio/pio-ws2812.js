const {PIO, ASM, StateMachine} = require('rp2');

const asm = new ASM({sideset: 1});
asm
.label('bitloop')
  .out('x', 1).side(0).delay(2)
  .jmp('!x', 'do_zero').side(1).delay(1)
.label('do_one')
  .jmp('bitloop').side(1).delay(4)
.label('do_zero')
  .nop().side(0).delay(4);

const sm = new StateMachine(0, asm, {
  freq: 8000000,
  autopull: true,
  pullThreshold: 24, 
  fifoJoin: PIO.FIFO_JOIN_TX,
  sidesetBase: 0
});
sm.active(true);

let arr = new Uint32Array([0xFF0000, 0xFF00, 0xFF, 0xFFFF, 0xFF0000, 0xFF00, 0xFF, 0xFFFFFF]);
sm.put(arr);
