import { useState } from "react";

const Greetings = () => {
  const [toggleText, setToggleText] = useState(false);
  const changeHandler = () => {
    setToggleText(state => !state);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!toggleText && <p>Text 1</p>}
      {toggleText && <p>Text 2</p>}
      <button id="toggle-btn" onClick={changeHandler}>Toggle</button>
    </div>
  );
};

export default Greetings;
