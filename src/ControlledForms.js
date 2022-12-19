import { useState } from "react";

const ControlledForms = () => {
  const [username, setUsername] = useState("");

  const [value, setValue] = useState ("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You entered: ${username}`);
  }

  function handleChange(event) {
    // console.log(event.target.value);
    setUsername(event.target.value.toLowerCase());
  }

  // console.log(username);

  const changeHandlerEvent = (e)=>{

  
  
    setValue (e.target.value) 
  }

  console.log(value)
 //  const variable = this.target.value;
  //   if (variable.length > 0 )
  //   { 
  //     setValue({value : false})
  //   }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form> <br />
    <br />
    <br />
    <br />
    <br />
    <br />


    <form>
      <div>
        <input
         type="text"
         value={value}
         onChange={changeHandlerEvent}>

        </input>
        <button
        disabled={!value}
         type = 'button'
         >Submit </button>
      </div>
    </form>
    </div>
  );
};

export default ControlledForms;