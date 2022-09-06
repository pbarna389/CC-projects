import { useState, useEffect } from "react";

const ClickButtonEffect = () => {
  const initialText = "Click me!";
  const firstClick = "You clicked me!";
  const secondClick = "Stop clicking me!";

  const [message, setMessage] = useState(initialText);

  const [timeoutID, setTimeoutID] = useState(null);

  const changeMessage = () => {
    if (message === initialText) {
      setMessage(firstClick);
    } else if (message === firstClick) {
      setMessage(secondClick);
    } else {
      setMessage(message);
      resetTimer();
    }
  };

  useEffect(() => {
    if (message !== initialText) {
      console.log(message)
      resetTimer();
    }
  }, [message]);

  const resetTimer = () => {
    clearTimeout(timeoutID)
    const id = setTimeout(() => {
      setMessage(initialText);
    }, 3000);
    setTimeoutID(id);
  };

  return <button onClick={changeMessage}>{message}</button>;
};

export default ClickButtonEffect;