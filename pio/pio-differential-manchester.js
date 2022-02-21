const {PIO, ASM, StateMachine} = require('rp2');

const asm_tx = new ASM({"sideset": 1, sidesetOpt: true});
asm_tx
.wrap_target()
.label('initial_high')
  .out('x', 1)
  .jmp('!x', 'high_0').side(1).delay(6)
.label('high_1')
  .nop()
  .jmp('initial_high').side(0).delay(6)
.label('high_0')
  .jmp('initial_low').delay(7)
.label('initial_low')
  .out('x', 1)
  .jmp('!x', 'low_0').side(0).delay(6)
.label('low_1')
  .nop()
  .jmp('initial_low').side(1).delay(6)
.label('low_0')
  .jmp('initial_high').delay(7);

const asm_rx = new ASM();
asm_rx
.label('initial_high')
  .wait(1, 'pin', 0).delay(11)
  .jmp('pin', 'high_0')
.label('high_1')
  .in('x', 1)
  .jmp('initial_high')
.label('high_0')
  .in('y', 1).delay(1)
.wrap_target()
.label('initial_low')
  .wait(0, 'pin', 0).delay(11)
  .jmp('pin', "low_1")
.label('low_0')
  .in('y', 1)
  .jmp('initial_high')
.label('low_1')
  .in('x', 1).delay(1)
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

const tx_inst = (new ASM()).pull('ifempty', 'block').toBinary()[0];
sm_tx.exec(tx_inst);
sm_tx.active(true);
sm_tx.setPins(0); // set all PIO pins low before start
sm_tx.active(false);

const inst1 = (new ASM()).set('x', 1).toBinary()[0];
const inst2 = (new ASM()).set('y', 0).toBinary()[0];
sm_rx.exec(inst1);
sm_rx.exec(inst2);
sm_rx.active(true);
 
sm_tx.put(0);
sm_tx.put(0x0ff0a55a);
sm_tx.put(0x12345678);
sm_tx.active(true);

for(let i = 0; i < 3; i++) {
  console.log("input :" + sm_rx.get().toString(16));
}
