const {ASM, StateMachine} = require('rp2');

const asm = new ASM();
asm
  .pull(0, 'block')
  .mov('x', '!osr')
  .pull(0, 'block')
  .mov('y', 'osr')
  .jmp('decy')
.label('decx')
  .jmp('x--', 'decy')
.label('decy')
  .jmp('y--', 'decx')
  .mov('isr', '!x')
  .push(0, 'block');

const sm = new StateMachine(0, asm, {});
sm.active(true);

function do_addition(a, b) {
  sm.put(a);
  sm.put(b);
  return sm.get();
}

for (var i = 0; i < 10; i++) {
  var a = Math.round(Math.random() * 100);
  var b = Math.round(Math.random() * 100);
  var c = do_addition(a, b);
  console.log(a + " + " + b + " = " + c);
}
