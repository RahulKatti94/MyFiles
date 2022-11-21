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
  return (
    <div>

    </div>
  )
}

export default RemoveDuplicateCharacter