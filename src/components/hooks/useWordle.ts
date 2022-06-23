// ---------------------------------------------- modules import
import { useState } from "react";

import { Guess, IGuessPair, newGuess } from "../../models/guess";

// ---------------------------------------------- hooks
export const useWordle = (solutionWord: string) => {
  // ---------------------------------------------- local state
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<Guess[]>([
    ...Array(6).map(() => newGuess()),
  ]); // each guess is an array
  const [history, setHistory] = useState<string[]>([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [turn, setTurn] = useState(0);
  const [usedKeys, setUsedKeys] = useState<{
    [key: string]: "green" | "grey" | "yellow";
  }>({});

  // ---------------------------------------------- private methods
  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    const solutionArray: (string | null)[] = Array.from(solutionWord);
    const formattedGuess: IGuessPair[] = Array.from(currentGuess).map((l) => {
      return { key: l, color: "grey" };
    });

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solutionWord[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess: IGuessPair[]) => {
    if (currentGuess === solutionWord) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) =>
      prevGuesses.map((guess, index) => {
        if (index === turn) {
          return formattedGuess;
        }

        return guess;
      })
    );

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setUsedKeys((prevUsedKeys) => {
      formattedGuess.forEach((l) => {
        const currentColor = prevUsedKeys[l.key];

        if (l.color === "green") {
          prevUsedKeys[l.key] = "green";
          return;
        }

        if (l.color === "yellow" && currentColor !== "green") {
          prevUsedKeys[l.key] = "yellow";
          return;
        }

        if (l.color === "grey" && currentColor !== ("green" || "yellow")) {
          prevUsedKeys[l.key] = "grey";
          return;
        }
      });

      return prevUsedKeys;
    });

    setCurrentGuess("");
  };

  // ---------------------------------------------- handlers
  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }: { key: string }) => {
    if (key === "Enter") {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log("you used all your guesses!");
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("you already tried that word.");
        return;
      }
      // check word is 5 chars
      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars.");
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  // ---------------------------------------------- return value
  return {
    currentGuess,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    onKeyup: handleKeyup,
  };
};
