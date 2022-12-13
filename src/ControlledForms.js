import { useState } from "react";

const ControlledForms = () => {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You entered: ${username}`);
  }

  function handleChange(event) {
    // console.log(event.target.value);
    setUsername(event.target.value.toLowerCase());
  }

  console.log(username);

  return (
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
    </form>
  );
};

export default ControlledForms;