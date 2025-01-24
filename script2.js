function add(n1, n2) { return n1 + n2; }                 
function sub(n1, n2) { return n1 - n2; }                  
function div(n1, n2) { return n1 / n2; }                   
function mult(n1, n2) { return n1 * n2; }                    

function c() { n1 = null; n2 = null; op = null; total = null; }      

let n1 = null;                         // first number.
let n2 = null;                         // second number.
let op = null;                         // operator symbol.
let opSwap = null;                     // hold next operator when chaining.
let total = null;                      // running total.
let equation = null;

function operate(n1, n2, op) {
  n1 = Number(n1);
  n2 = Number(n2);
  total = op == '+' ? add(n1, n2) : 
          op == '-' ? sub(n1, n2) :
          op == '/' ? div(n1, n2) :
          op == '*' ? mult(n1, n2) : 
          c();
}

const OPER = ['+', '-', '*', '/', '%'];
const EQUAL = '=';

let label = document.querySelector('label');
let btns = document.querySelector('.button_container');

btns.addEventListener('click', (e) => {
  const btn = e.target.textContent;
  const btnType = e.target.className;
  label.textContent += btn;
  
  if ( equation == null) equation = btn; 
  else equation += btn; 


  OPER.forEach( ( operator ) => {
    for ( let i = 0; i < equation.length; i++ ) {
      if ( equation[i] == operator ) {
        console.log('first if check');
        op = operator;
        n1 = equation.slice( 0, equation.indexOf( operator ));
        n2 = equation.slice( equation.indexOf( operator ) + 1 );
        if ( OPER.includes(n2[ n2.length - 1 ] )) { 
          console.log('second if check');
          console.log(`BEFORE REMOVING EXTRA OPERATOR: n1: ${n1}\n n2: ${n2}\n op ${op}`)
          opSwap = n2[n2.length - 1];
          n2 = n2.slice(0, n2.length - 1);
          console.log(`AFTER REMOVING EXTRA OPERATOR: n1: ${n1}\n n2: ${n2}\n op ${op}`)
          total = operate(n1, n2, op);
          n1 = total;
          op = opSwap;
          console.log(`total: ${total}`);
          console.log(`AFTER FINDING TOTAL: n1: ${n1}\n n2: ${n2}\n op ${op}`)
        }
      }
    }
  });
});
