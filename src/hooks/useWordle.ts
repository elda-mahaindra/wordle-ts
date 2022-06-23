// ---------------------------------------------- modules import
import { FunctionComponent, useState } from "react";

import { IGuess } from "models/guess";
import { ISolution } from "models/solution";

// ---------------------------------------------- hooks
export const useWordle = (solution: ISolution) => {
  // ---------------------------------------------- local state
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<IGuess[]>([]); // each guess is an array
  const [history, setHistory] = useState<string[]>([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [turn, setTurn] = useState(0);

  // ---------------------------------------------- private methods
  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {};

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};
  // ---------------------------------------------- handlers
  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = () => {};

  // ---------------------------------------------- effects

  // ---------------------------------------------- return value
  return {
    currentGuess,
    guesses,
    isCorrect,
    turn,
    onKeyup: handleKeyup,
  };
};
