// import StoredDataOnWindow from "./StoredDataOnWindow";
// import RemoveDuplicateCharacter from './RemoveDuplicateCharacter';
// import Style from './Style';
// import TodoMethod from "./TodoMethod";
// import { useState } from "react";
// import Emoji from './Emoji';
// import SingDown from './SingDown'
// import UploadAndDisplayImage from './UploadAndDisplayImage'
// import LoginId from './LoginId'
// import Information from "./Information";
// import Home from "./Home";
// import Login from "./Login";
  // import Sign from "./Sign";
// import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { useState } from 'react';
import LoginForm from './LoginForm';
import UserData from './UserData';
// import LocalStorage from "./LocalStorage";
// import LocalFormStorage from "./LocalFormStorage";
// import LocalStorageData from "./LocalStorageData";
// import TestComponent from "./TestComponent.js";
// import CallBackHook from "./CallBackHook.js";
// import FormValidation from "./FormValidation.js"

// import CssPropertiesCheck from "./CssPropertiesCheck";
import Testing from "./Testing";

// import Testing from "./Testing";
// dfosdfdsfsofsdfso

//  import Fibonacci from "./Fibonacci"

// import UseMemoHook from "./UseMemoHook";
// import Form from "./Form";
// import UseCounter from "./UseCounter"
// import ControlledForms from "./ControlledForms";
// import DynamicForms from "./DynamicForms";


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
    <div className="">
      {/* <RemoveDuplicateCharacter /> */}
      {/* <Style /> */}
      {/* <StoredDataOnWindow /> */}
      {/* <h1> parent Component :  {data}</h1> */}
      {/* <Information setData = {setData}  info = {name}/> */}
      {/* <TodoMethod /> */}
      {/* <SingDown /> */}
      {/* <UploadAndDisplayImage /> */}
      {/* <LoginId /> */}
      {/* <LocalStorage /> */}
       {/* <Emoji /> */}
      {/* <TestComponent /> */}
      {/* <LocalStorageData /> */}
      {/* <LocalFormStorage /> */}


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
      {/* 8 dec 2022 */}
      {/* <FormValidation /> */}
      {/* 9 dec 2022 */}
      {/* <CallBackHook /> */}
        {/* 12 dec 2022 */}
      {/* <UseMemoHook /> */}
      {/* <UseCounter /> */}
      {/* <Form /> */}
       {/* 13 dec 2022 */}
      {/* <ControlledForms /> */}
      {/* <DynamicForms /> */}
       {/* 14 dec 2022 */}
      {/* <Fibonacci /> */}
      {/* 2nd jan 2023 */}
      {/* <Testing /> */}

      {/* 3rd jan 2023 */}

      {/* <CssPropertiesCheck/> */}
      {/* <Testing /> */}
      

    </div>
  );
}

export default App;
