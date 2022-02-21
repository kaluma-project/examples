const {ASM, StateMachine} = require('rp2');

const asm = new ASM();
asm
.label('start')
  .pull(0, 'block')
  .out('pins', 1)
  .jmp('start');

const sm = new StateMachine(0, asm, {outBase: 25});
sm.active(true);

let output = 0;
setInterval(function() {
  output = 1 - output;
  sm.put(output);
}, 100);
