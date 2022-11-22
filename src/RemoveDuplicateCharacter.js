import React, { useState ,  useRef } from 'react'

const RemoveDuplicateCharacter = () => {


  const [name, setName] = useState('Mehdi')

  const inputRef = useRef(null)


  // ------------------------------ANother Example Added ----------------------------------------------------------------

  const [value, setValue] = useState("");
  const valueRef = useRef();

  const handleClick = () => {
    
    setValue(valueRef.current.value);
  };

  console.log(valueRef);
  console.log(value)
  console.log(setValue)

   // ------------------------------ANother Example Added ----------------------------------------------------------------

  const inputFocus = () => {
    inputRef.current.focus()
  }

    let str = "i like Iron man more than batman but i like"
    let set = new Set();
    let words = str.split (' ')

    // let words = str.toLowercase().split (' ')
    words.forEach (e => {
        set.add(e)
    })
    console.log(set);


    const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
let unique = [...new Set(names)];
console.log(unique);

const numbers = [1 , 21, 21, 34 ,12 ,34 ,12];
const removeRepeatNumbers = array => [...new Set(array)]
removeRepeatNumbers(numbers) // [ 1, 21, 34, 12 ]
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=> setName("John")}>Change Name</button> <br /><br />

      <input ref={inputRef} />
      <button onClick={inputFocus}>Focus on the Input</button><br /><br />

      <h4>Input Value: {value}</h4>
      <input ref={valueRef} />
      <button onClick={handleClick}>click</button>

    </div>
  )
}

export default RemoveDuplicateCharacter