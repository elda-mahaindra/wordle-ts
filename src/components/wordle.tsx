// ---------------------------------------------- modules impor
import { FunctionComponent, useEffect } from "react";

import { IWordleProps } from "./common";

import { useWordle } from "./hooks/useWordle";

// ---------------------------------------------- the component
const Wordle: FunctionComponent<IWordleProps> = ({ solution }) => {
  // ---------------------------------------------- local state
  const { currentGuess, onKeyup } = useWordle(solution);

  // ---------------------------------------------- effects
  useEffect(() => {
    window.addEventListener("keyup", onKeyup);

    return () => window.removeEventListener("keyup", onKeyup);
  });

  // ---------------------------------------------- content
  return <div>current guess - {currentGuess}</div>;
};

export default Wordle;
