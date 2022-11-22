import React from 'react'

const RemoveDuplicateCharacter = () => {

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

    </div>
  )
}

export default RemoveDuplicateCharacter