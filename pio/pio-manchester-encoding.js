const {PIO, ASM, StateMachine} = require('rp2');

const asm_tx = new ASM({"sideset": 1, sidesetOpt: true});
asm_tx
.wrap_target()
.label('do_1')
  .nop().side(0).delay(5)
  .jmp('get_bit').side(1).delay(3)
.label('do_0')
  .nop().side(1).delay(5)
  .nop().side(0).delay(3)
.label('get_bit')
  .out('x', 1)
  .jmp('!x', 'do_0')
.wrap();

const asm_rx = new ASM();
asm_rx
.label('start')
  .wait(0, 'pin', 0)
  .in('y', 1).delay(8)
  .jmp('pin', 'start')
.wrap_target()
  .wait(1, 'pin', 0)
  .in('x', 1).delay(8)
  .jmp('pin', 'start')
.wrap();

const options_tx = {
  sidesetBase: 2,
  autopull: true,
  fifoJoin: PIO.FIFO_JOIN_TX,
};

const options_rx = {
  inBase: 3,
  jmpPin: 3,
  autopush: true,
  fifoJoin: PIO.FIFO_JOIN_RX,
};
const sm_tx = new StateMachine(0, asm_tx, options_tx);
const sm_rx = new StateMachine(1, asm_rx, options_rx);

sm_tx.active(true);
sm_tx.setPins(0); // set all PIO pins low before start
sm_tx.active(false);
sm_rx.exec((new ASM()).set('x', 1).toBinary()[0]);
sm_rx.exec((new ASM()).set('y', 0).toBinary()[0]);
sm_rx.exec((new ASM()).wait(1, 'pin', 0).delay(2).toBinary()[0]);
sm_rx.active(true);
 
sm_tx.active(false);
sm_tx.put(0);
sm_tx.put(0x0ff0a55a);
sm_tx.put(0x12345678);
sm_tx.active(true);

for(let i = 0; i < 3; i++) {
  console.log("input :" + sm_rx.get().toString(16));
}
