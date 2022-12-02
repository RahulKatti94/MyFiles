import React, { useEffect, useState } from "react";

const LocalFormStorage = () => {
  const [data, setData] = useState(getFormValue);



  function getFormValue () {
    const storedValue = localStorage.getItem('key');
    if (!storedValue) return{
      fname: " ",
      email: " ",
      telephone: " ",
      message: " ",

    };
    return JSON.parse(storedValue)
  }

  useEffect (()=>{
      localStorage.setItem('key' , JSON.stringify(data));
  } , [data]);

  const onSubmitHandler = (e) =>{
    e.preventDefault(); 
    alert("message")
 }


  const handleChange = (event) => {
      setData((previousValue)=>({
        ...previousValue,
        [event.target.name] : event.target.value,
      }));
  }




   

  return (
    <div className="pt-5">
      <form onSubmit={onSubmitHandler} className=" mt-5 w-25 card container text-center">
        <h1> Registration Form</h1>
        <label htmlFor="name">fist Name</label>
        <br />
        <input
          type="text"
          placeholder="please enter your name"
          value={data.fname}
           onChange={handleChange}
           name = "name"
          required
        ></input>
        <br />
        <label   htmlFor="email">email_Id</label>
        <br />
        <input
          type="email"
          placeholder="please enter your email"
          value={data.email}
          required
          name="email"
          onChange={handleChange}
        ></input>
        <br />
        <label  htmlFor="telephone">telephone</label>
        <br />
        <input
         type="telephone"
          required
           value={data.telephone}
          onChange={handleChange}
          name="telephone"
          ></input>
        <br />
        <label htmlFor="Messsage" >Messsage</label>
        <textarea
          className="mb-4"
          rows={4}
          required
          value={data.message}
          onChange={handleChange}
          name="message"
        ></textarea>
        <br />
        <div>
          <button className="mb-3" type="submit">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LocalFormStorage;
