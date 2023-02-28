// import Cmd from './Cmd';
// import RemoveDuplicateCharacter from './RemoveDuplicateCharacter';
// import Style from './Style';
// import TodoMethod from "./TodoMethod";
// import { useState } from "react";
// import Information from "./Information";
// import Home from "./Home";
// import Login from "./Login";
  // import Sign from "./Sign";
// import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { useState } from 'react';
import LoginForm from './LoginForm';
import UserData from './UserData';


function App() {

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwtToken'));
  const [loginError, setLoginError] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem('jwtToken');
    setLoggedIn(false);
  }

  function handleError() {
    setLoginError(true);
  }
  // const name = 'Snehal' ;

  // const [data,setData] = useState("")
  return (
    <div className="App">
      {/* <RemoveDuplicateCharacter /> */}
      {/* <Style /> */}
    {/* <Cmd /> */}
    {/* <h1> parent Component :  {data}</h1> */}
    {/* <Information setData = {setData}  info = {name}/> */}

    {/* <TodoMethod /> */}
    {/* <Home /> */}
    {/* <Sign /> */}
    {/* <UploadAndDisplayImage /> */}
      {/* <Login /> */}

      {loggedIn ? (
        <>
          <UserData />
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <>
          {loginError && <p>Login failed. Please try again.</p>}
          <LoginForm onLogin={handleLogin} onError={handleError} />
        </>
      )}
    </div>
  );
}

export default App;
