// ---------------------------------------------- modules impor
import { FunctionComponent, useEffect, useState } from "react";

import { ILetter } from "../models/letter";

// ---------------------------------------------- the component
const Keypad: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [letters, setLetters] = useState<null | ILetter[]>(null);

  // ---------------------------------------------- effects
  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json: ILetter[]) => {
        setLetters(json);
      });
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          return <div key={letter.key}>{letter.key}</div>;
        })}
    </div>
  );
};

export default Keypad;
