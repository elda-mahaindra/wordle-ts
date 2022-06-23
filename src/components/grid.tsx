// ---------------------------------------------- modules impor
import { FunctionComponent } from "react";

import Row from "./row";

import { IGridProps } from "./common";

// ---------------------------------------------- the component
const Grid: FunctionComponent<IGridProps> = ({
  currentGuess,
  guesses,
  turn,
}) => {
  // ---------------------------------------------- local state

  // ---------------------------------------------- effects

  // ---------------------------------------------- content
  return (
    <div>
      {guesses.map((guess, i) =>
        turn === i ? (
          <Row key={i} currentGuess={currentGuess} />
        ) : (
          <Row key={i} guess={guess} />
        )
      )}
    </div>
  );
};

export default Grid;
