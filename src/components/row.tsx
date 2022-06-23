// ---------------------------------------------- modules impor
import { FunctionComponent } from "react";

import { IRowProps } from "./common";

// ---------------------------------------------- the component
const Row: FunctionComponent<IRowProps> = ({ currentGuess, guess }) => {
  // ---------------------------------------------- content
  if (guess) {
    return (
      <div className="row past">
        {guess.map((g, i) => (
          <div key={i} className={g.color}>
            {g.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    const letters = currentGuess.split("");

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
