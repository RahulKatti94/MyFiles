
import React, { useState, useRef, useEffect } from "react";


const StoredDataOnWindow = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const newList = [...list];

    const newItem = {
      title: inputValue,
      completed: false,
    };

    newList.push(newItem);

    setList(newList);
    setInputValue("");
    inputRef.current.focus();
  };

  const handleRemoveClick = (index) => {
    const newList = [...list];

    newList.splice(index, 1);

    setList(newList);
  };

  const handleCompletedClick = (index) => {
    const newList = list.map((value, i) => {
      if (i === index) {
        const newValue = { ...value };

        newValue.completed = newValue.completed === true ? false : true;

        return newValue;
      } else {
        return value;
      }
    });

    setList(newList);
  };

  const inputStyle = {
    backgroundColor: "red",
    color: "white",
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <button onClick={handleButtonClick}>Add</button>
      <div>
        {list.length > 0
          ? list.map((item, index) => {
              return (
                <div>
                  {item.title}
                  <button
                    label={item.completed ? "Incomplete" : "Complete"}
                    onClick={() => handleCompletedClick(index)}
                  />
                  <button2
                    label="Remove"
                    className="remove-button"
                    onClick={() => handleRemoveClick(index)}
                  />
                </div>
              );
            })
          : "No data exists"}
      </div>
    </div>
  );
};

export default StoredDataOnWindow