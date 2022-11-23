import React from "react"


const Information = ( {setData}) => {

  // OR

  // const Information = ( props,  {setData}) => {

  

  const myData = "abc";

    return (
      <div>
        <h1>Child Component :</h1>
        <button type="button" onClick={()=> setData(myData)}>Click me </button> <br />
         <label>firstName</label>
        {/* <input type = "text" value={props.info}></input> */}

       
      </div>
    )
  }
  
  export default Information