import { useState } from "react";

const DynamicForms = () => {
  const [username, setUsername] = useState("");
  console.log({
    username,
    usernameLowecase: username.toLowerCase(),
  });
  const isLowerCase = username === username.toLowerCase();
  const error = isLowerCase ? null : "Username must be lower case";

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You entered: ${username}`);
  }

  function handleChange(event) {
    setUsername(event.target.value);
  }

  console.log(username)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <div style={{ color: "red" }}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
};

export default DynamicForms;