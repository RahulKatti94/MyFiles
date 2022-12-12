// import { useMemo } from "react";
import { useState , useMemo } from "react";
import React from "react";

const UseCounter = () => {
  const [value, setValue] = useState("false");
  const [define, setDefine] = useState(0);
  const [provalue, setProvalue] = useState(10);

  const buttonHandler = () => {
    console.log("1st Button ");
    setDefine(define + 1);
  };

  const buttonHandler1 = () => {
    console.log("2nd Button");
    setProvalue(provalue * 3);
  };
   
  const numberCheck =  useMemo (() =>{

    let i = 0;
    while (i< 200000000) i ++
 return define % 2 === 0

  }, [define]) 
   

  return (
    <div className="text-center m-0 p-0">
      <p> Counter Numer : {define}</p>

      <button onClick={buttonHandler}>Click me </button>

      <br />
      <br />
      <span>{numberCheck ? "even number " : "odd Number"} </span>

      {/* Toggle bUtton With Ternary operator  */}
      <p> Count Down : {provalue}</p>
      <button onClick={buttonHandler1}> Call Me</button>
      <br />
      <br />

      <button value={value} onClick={() => setValue(!value)}>
        {value ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  );
};

export default UseCounter;
