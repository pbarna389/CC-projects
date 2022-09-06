import { useState } from "react";

const ClickButton = () => {
  const initialText = "Click me!";
  const firstClick = "You clicked me!";
  const secondClick = "Stop clicking me!";

  const [message, setMessage] = useState(initialText);
  const [timeoutID, setTimeoutID] = useState(null);

  const changeMessage = () => {
    if (message === initialText) {
      setMessage(firstClick)
      returnToDefault();
    } else if (message === firstClick) {
      setMessage(secondClick);
      returnToDefault();
    } else {
      returnToDefault();
    };

  };

  const startTimer = () => {
    console.log(message, timeoutID);
    const id = setTimeout(() => {

      setMessage(initialText)

    }, 3000);

    setTimeoutID(id)
  };

  const returnToDefault = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    startTimer();
  };

  return (
    <button onClick={changeMessage}>
      {message}
    </button>
  )
};

export default ClickButton