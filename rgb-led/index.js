const r = 0; // GP0
const g = 2; // GP1
const b = 4; // GP2

function setColor(red, green, blue) {
  analogWrite(r, red);
  analogWrite(g, green);
  analogWrite(b, blue);
}

setInterval(() => {
  let rv = Math.random();
  let gv = Math.random();
  let bv = Math.random();
  setColor(rv, gv, bv);
  console.log(
    `random color: r=${rv.toFixed(2)},g=${gv.toFixed(2)},b=${bv.toFixed(2)}`
  );
}, 1000);
