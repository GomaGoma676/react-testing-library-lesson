import React from "react";

const ClickRender = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  );
};
export default ClickRender;
