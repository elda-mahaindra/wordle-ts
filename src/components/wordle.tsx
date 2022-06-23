// ---------------------------------------------- modules impor
import { FunctionComponent, useEffect, useState } from "react";

import Grid from "./grid";
import Keypad from "./keypad";
import Modal from "./modal";

import { IWordleProps } from "./common";
import { useWordle } from "./hooks/useWordle";

// ---------------------------------------------- the component
const Wordle: FunctionComponent<IWordleProps> = ({ solution }) => {
  // ---------------------------------------------- local state
  const { currentGuess, guesses, isCorrect, turn, usedKeys, onKeyup } =
    useWordle(solution.word);

  const [showModal, setShowModal] = useState(false);

  // ---------------------------------------------- effects
  useEffect(() => {
    window.addEventListener("keyup", onKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 200);
      console.log("congrats, you win");
      window.removeEventListener("keyup", onKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 200);
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
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />

      <Keypad usedKeys={usedKeys} />

      {showModal && (
        <Modal isCorrect={isCorrect} solutionWord={solution.word} turn={turn} />
      )}
    </>
  );
};

export default Wordle;
