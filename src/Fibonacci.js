import { useState } from "react"

const Fibonacci = () => {
    const [value, setValue] = useState (1);
    const [starting] = useState (0);

    const additionHandler = (e)=>{  
            let a =  value + starting;
            setValue({
                value : a, 
                starting : value
            })

    }

    const subtractionHandler = ()=>{
          
    }


    // program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt ('Enter a positive number: '));

// Logic for Fibonacci Series is here under  
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
  return (
    <>
            <h1>Fibonacci Series  : {value}</h1>
            <button onClick={additionHandler}> + Addition</button> <br /><br />
            <button onClick={subtractionHandler}> - Subtraction </button>

    </>
  )
}
export default Fibonacci