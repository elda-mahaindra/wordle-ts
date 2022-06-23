// ---------------------------------------------- modules impor
import { FunctionComponent, useEffect, useState } from "react";

import { IKeypadProps } from "./common";
import { ILetter } from "../models/letter";

// ---------------------------------------------- the component
const Keypad: FunctionComponent<IKeypadProps> = ({ usedKeys }) => {
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
          const color = usedKeys[letter.key];

          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
