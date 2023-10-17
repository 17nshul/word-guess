import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [inputStr, setInputStr] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [shuffledName, setShuffledName] = useState();
  const [matched, setMatched] = useState(false);
  const [show, setShow] = useState(false);
  const [randomName, setRandomName] = useState("");

  const getRandom = () => {
    const names = ["anshul", "ankit", "anshuman"];

    const randomIndex = Math.floor(Math.random() * names.length);

    const randomName = names[randomIndex];

    var shuffled = randomName
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
    setRandomName(randomName);
    setShuffledName(shuffled);
  };

  useEffect(() => {
    getRandom();
  }, []);

  const clickHandler = () => {
    // Update the state to indicate that the button has been clicked
    setIsButtonClicked(true);
    if (randomName === inputStr) {
      setMatched(true);
    } else {
      setMatched(false);
    }
    setShow(true);
  };

  return (
    <div className="App">
      <h1>Khyalia's game</h1>
      <h1>{shuffledName}</h1>
      <input
        type="text"
        value={inputStr}
        onChange={(e) => {
          setInputStr(e.target.value);
          setIsButtonClicked(false);
          setShow(false);
        }}
      />
      <button onClick={clickHandler}>Submit</button>

      {/* Conditionally render the <h1> element only when the button is clicked */}
      {isButtonClicked && (
        <div>
          <h1>{inputStr}</h1>
        </div>
      )}
      {show && <div>{matched ? <h1>You won!!!</h1> : <h1>Try again </h1>}</div>}
    </div>
  );
}
