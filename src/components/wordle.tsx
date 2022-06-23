// ---------------------------------------------- modules impor
import { FunctionComponent, useEffect } from "react";

import Grid from "./grid";
import Keypad from "./keypad";

import { IWordleProps } from "./common";
import { useWordle } from "./hooks/useWordle";

// ---------------------------------------------- the component
const Wordle: FunctionComponent<IWordleProps> = ({ solution }) => {
  // ---------------------------------------------- local state
  const { currentGuess, guesses, isCorrect, turn, usedKeys, onKeyup } =
    useWordle(solution.word);

  // ---------------------------------------------- effects
  useEffect(() => {
    window.addEventListener("keyup", onKeyup);

    if (isCorrect) {
      console.log("congrats, you win");
      window.removeEventListener("keyup", onKeyup);
    }

    if (turn > 5) {
      console.log("unlucky, out of guesses");
      window.removeEventListener("keyup", onKeyup);
    }

    return () => window.removeEventListener("keyup", onKeyup);
  }, [isCorrect, turn, onKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  // ---------------------------------------------- content
  return (
    <>
      <div>solution - {solution.word}</div>

      <div>current guess - {currentGuess}</div>

      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />

      <Keypad usedKeys={usedKeys} />
    </>
  );
};

export default Wordle;
