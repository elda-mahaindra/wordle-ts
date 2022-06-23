// ---------------------------------------------- modules impor
import { FunctionComponent, useEffect } from "react";

import Grid from "./grid";
import Keypad from "./keypad";

import { IWordleProps } from "./common";
import { useWordle } from "./hooks/useWordle";

// ---------------------------------------------- the component
const Wordle: FunctionComponent<IWordleProps> = ({ solution }) => {
  // ---------------------------------------------- local state
  const { currentGuess, guesses, isCorrect, turn, onKeyup } = useWordle(
    solution.word
  );

  // ---------------------------------------------- effects
  useEffect(() => {
    window.addEventListener("keyup", onKeyup);

    return () => window.removeEventListener("keyup", onKeyup);
  }, [onKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  // ---------------------------------------------- content
  return (
    <>
      <div>solution - {solution.word}</div>

      <div>current guess - {currentGuess}</div>

      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />

      <Keypad />
    </>
  );
};

export default Wordle;
