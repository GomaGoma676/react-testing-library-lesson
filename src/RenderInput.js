import React from "react";

const RenderInput = ({ outputConsole }) => {
  const [input, setInput] = React.useState("");
  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };
  console.log(outputConsole);
  const updateValue = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default RenderInput;
