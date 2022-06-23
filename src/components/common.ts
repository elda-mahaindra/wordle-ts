// ---------------------------------------------- modules import
import { Guess } from "../models/guess";
import { ISolution } from "../models/solution";

export interface IGridProps {
  currentGuess: string;
  guesses: Guess[];
  turn: number;
}

export interface IKeypadProps {
  usedKeys: {
    [key: string]: "green" | "grey" | "yellow";
  };
}

export interface IRowProps {
  guess?: Guess;
  currentGuess?: string;
}

export interface IWordleProps {
  solution: ISolution;
}
