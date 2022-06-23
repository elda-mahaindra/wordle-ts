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
      {guesses.map((guess, i) => (
        <Row key={i} />
      ))}
    </div>
  );
};

export default Grid;
