import CallBackProp from "./CallBackProp";
import { useCallback, useState } from "react";

const CallBackHook = () => {
  const [value, setValue] = useState(0);

  const [list, setLIst] = useState([]);


  const todo = useCallback(() => {
    setLIst((pre) => [...pre, `entry no.  `]);
  },
  [list]);    
 

  const btnHandler = () => {
    setValue(value + 1);
  };

  return (
    <>
      <CallBackProp list={list} todo={todo} />

      <div>Count : {value}</div>
      <button onClick={btnHandler}> Click me </button>
    </>
  );
};

export default CallBackHook;
