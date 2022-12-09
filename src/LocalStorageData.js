import { useRef, useState } from "react"
import React from 'react'

const LocalStorageData = () => {

    const [retainData, setRetainData] = useState ();
    const [retainEmail, setretainEmail] = useState ();
    const [retainNumber, setRetainNumber] = useState ();

const dataRef = useRef ({});
const StoreRef = useRef ({});
const  valueRef = useRef ({});



    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(dataRef.current.value)
        console.log(StoreRef.current.value)
        console.log(valueRef.current.value)
        setRetainData (dataRef.current.value)
        setretainEmail (StoreRef.current.value)
        setRetainNumber (valueRef.current.value)
        

    }
    console.log(retainData);
    console.log(retainEmail);
    console.log(retainNumber);



        
    
  return (
     <div>
        <form onSubmit={submitHandler} className='card text-center container  mt-5 w-25'>
            <label>
                First Name
            </label>
            <input type="text"
            // value={retainData.fname}
            ref={dataRef}
             />
             <label>email_ID</label>
             <input type="email"
            //   value={retainData.email}
            ref={StoreRef}
              />
              <label>Telephone Number</label>
              <input type="tel"
            //    value={retainData.phonenumber}
            ref={valueRef}
            
                />
              <div>
              <button className='mt-3' type='submit' value="submit"> Submit</button>
              </div>

        </form>
    </div>
  )
}

export default LocalStorageData