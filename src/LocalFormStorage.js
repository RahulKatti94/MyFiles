import React, { useEffect, useState } from "react";



const LocalFormStorage = () => {
  const [data, setData] = useState(getFormValues);


  function getFormValues() {
    const storedValues = localStorage.getItem('form');
    if (!storedValues)
      return {
        name: '',
        email: '',
        telephone: '',
        message: '',
        };
    return JSON.parse(storedValues);
  }

  useEffect(() => {
		localStorage.setItem('form', JSON.stringify(data));
	}, [data]);
 
     const handleChange = (event) => {
       setData((previousValue)=>({
         ...previousValue,
         [event.target.name] : event.target.value,
       }));
   }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('An error occurred on the server. Please try again!!!');
  };

  return (
    <div className="pt-5">
      <form
        onSubmit={onSubmitHandler}
        className=" mt-5 w-25 card container text-center"
      >
        <h1> Registration Form</h1>
        <label htmlFor="fname">fist Name</label>
        <br />
        <input
          type="text"
          placeholder="please enter your name"
          value={data.fname}
          name="name"
          required
          onChange={handleChange}
         
        ></input>
        <br />
        <label htmlFor="e_mail">email_Id</label>
        <br />
        <input
          type="email"
          placeholder="please enter your email"
          value={data.email}
          required
          name="email"
          id="e_mail"
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="cellphone">telephone</label>
        <br />
        <input
          type="telephone"
          required
          value={data.telephone}
          id="cellphone"
          name="telephone"
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="messsager">Messsage</label>
        <textarea
          className="mb-4"
          rows={4}
          required
          value={data.message}
          name="messsage"
          onChange={handleChange}
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
