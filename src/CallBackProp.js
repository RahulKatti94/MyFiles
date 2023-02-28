import { memo } from "react";

const CallBackProp = ({ list, todo }) => {
  console.log("child alert");
  return (
    <>
      <h4>Todo Item</h4>

      {list.map((value, index) => {
        return <p key={index}> {value + index}</p>;
      })}
      <button onClick={todo}>Push me </button>
    </>
  );
};

export default memo(CallBackProp);
