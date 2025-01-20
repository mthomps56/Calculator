function add(n1, n2) { return n1 + n2; }                 
function sub(n1, n2) { return n1 - n2; }                  
function div(n1, n2) { return n1 / n2; }                   
function mult(n1, n2) { return n1 * n2; }                    

function c() { n1 = null; n2 = null; op = null; total = null; }      

let n1 = null;                         // first number.
let n2 = null;                         // second number.
let op = null;                         // operator symbol.
let total = null;                      // running total.

function operate(n1, n2, op) {
  n1 = Number(n1);
  n2 = Number(n2);
  total = op == '+' ? add(n1, n2) : 
          op == '-' ? sub(n1, n2) :
          op == '/' ? div(n1, n2) :
          op == '*' ? mult(n1, n2) : 
          c();
}

//const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//const OPER = ['+', '-', '*', '/', '%'];
const EQUAL = '=';

let label = document.querySelector('label');
let btns = document.querySelector('.button_container');

btns.addEventListener('click', (e) => {
  const btn = e.target.textContent;
  const btnType = e.target.className;
  label.textContent += btn;
  console.log(btnType);

  switch(btnType) {
    case 'number':
      console.log('case 1');
      if ( n1 == null ) {
        console.log('case 1 "if"');
        n1 = btn;      // Change n1 from null to first digit.
        break;
      }
      else if ( op == EQUAL ) {
        console.log('case 1 "else if" 1');
        n1 = btn;
        op = null;
        label.textContent = n1;
        break;
      }
      else if ( op == null ) {
        console.log('case 1 "else if" 2');
        n1 += btn;     // Add digits to n1 until an operator is assigned.
        break;
      }
    case 'number': 
      console.log('case 2');
      if ( op != null ) { 
        console.log('case 2 "if"');
        n2 = btn;       // n1 is finished and the operation has been chosen. Fill n2.
        break;
      }
      if ( n2 != null ) {
        console.log('case 2 "if" 2');
        n2 += btn;      // Add digits to n2 until equals or another operator is selected.
        break;
      }
    case 'operator':
      console.log('case 3');
      if ( n1 != null && n2 != null) {  // When number is stored in n2 pressing an operator button first
        console.log('case 3 "if"');
        operate(n1, n2, op);            // calls operate before reassigning op variable to the new operator. 
        label.textContent = total;
        n1 = total;
        n2 = null;
        op = btn;
        break;
      }
      else if ( n1 != null ) {
        console.log('case 3 "else if"');
        op = btn;   // Choose the operation only after the 1st number is assigned.
        break;
      }
      else { 
        console.log('case 3 "else"');
        op = null;
        break;
      }
    case 'equals':
      console.log('case 4');
      operate(n1, n2, op);
      label.textContent = total;
      n1 = total;
      n2 = null;
      op = EQUAL;
      break;

    case 'clear':
      console.log('case 5');
      c();
      label.textContent = '';
      break;
  }

  console.log(n1, op, n2);        

});
