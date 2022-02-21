const {ASM, StateMachine} = require('rp2');

const asm = new ASM({"sideset": 1, sidesetOpt: true});
asm
  .set('pindirs', 1)
.label('again')
  .set('pins', 1).delay(1)
  .set('pins', 0)
  .jmp('again');

const options = {
  freq:50000000,
  setBase: 0,
};

const sm = new StateMachine(0, asm, options);
sm.active(true);
