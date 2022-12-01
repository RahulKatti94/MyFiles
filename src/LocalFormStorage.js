import React, { useState } from 'react'

const LocalFormStorage = () => {

    const [data, setData] = useState ({
        name : "",
        email : "",
        password : "",
    })

   
    const [value, setValue] = useState ([])


    const buttonHandler = (ele) =>{
        ele.preventDefault();
        setData((ele)=>{
            console.log(ele)
            return  [...ele , data]

         })
         setValue ("")
            //  console.log(value)
    }
  return (
    <div>
        <form onSubmit={buttonHandler} className='card container text-center'>
            <label>fist Name</label><br />
            <input type="text" placeholder='please enter your name' required></input><br />
            <label>email_Id</label><br />
            <input type="email" placeholder='please enter your email' required></input><br />
            <label>Password</label><br />
            <input type="Password" required></input><br />
            <div className="button-container">
          <input type="submit" />
        </div>
        </form>

    </div>
  )
}

export default LocalFormStorage