const {ASM, StateMachine} = require('rp2');

const asm = new ASM({"sideset": 1, sidesetOpt: true});
asm
  .pull(0, 0).side(0)
  .mov('x', 'osr')
  .mov('y', 'isr')
.label('countloop')
  .jmp('x!=y', 'noset')
  .jmp('skip').side(1)
.label('noset')
  .nop()
.label('skip')
  .jmp('y--', 'countloop');

const options = {
  sidesetBase: 25,
};

const sm = new StateMachine(0, asm, options);

function set_period(period) {
  sm.active(false);
  sm.put(period);
  sm.exec((new ASM()).pull(0, 0).toBinary()[0]);
  sm.exec((new ASM()).out('isr', 32).toBinary()[0]);
  sm.active(true);
}

function set_level(level) {
  sm.put(level);
}

set_period(0xFFFF);
var level = 0;

setInterval(function() {
  console.log(level);
  set_level(level * level);
  level = (level + 1) % 256;
}, 10);
