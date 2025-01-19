function a(n1, n2) { return n1 + n2; }                    // a for add.
function s(n1, n2) { return n1 - n2; }                    // s for subtract.
function d(n1, n2) { return n1 / n2; }                    // d for divide.
function m(n1, n2) { return n1 * n2; }                    // m for multiply.
function c() { n1 = null; n2 = null; total = null; }      // clears data.

let n1 = null;                         // first number.
let n2 = null;                         // second number.
let op = null;                         // operator symbol.
let total = null;                      // running total.

function operate(n1, n2, op) {
  n1 = Number(n1);
  n2 = Number(n2);
  total = op == '+' ? a(n1, n2) : 
          op == '-' ? s(n1, n2) :
          op == '/' ? d(n1, n2) :
          op == '*' ? m(n1, n2) : 
          c();
}

const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const OPER = ['+', '-', '*', '/', '%'];
const EQUA = '=';

let label = document.querySelector('label');
let btns = document.querySelector('.button_container');

btns.addEventListener('click', (e) => {
  const btn = e.target.textContent;
  label.textContent += btn;

  if (op == null && NUMS.includes(Number(btn))) { 
    if (n1 == null) n1 = btn;
    else n1 += btn;
    console.log('n1');
  }

  if (OPER.includes(btn) && n1 != null) {
    console.log('operator');
    op = btn;
  } 

  if (NUMS.includes(Number(btn)) && op != null) {
    console.log('n2'); 
    if (n2 == null) n2 = btn;
    else n2 += btn;
  }

  if (EQUA == btn) { 
    operate(n1, n2, op);
    label.textContent = total;
  }
  console.log(n1, op, n2,  total);
});
