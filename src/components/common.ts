// ---------------------------------------------- modules import
import { Guess } from "../models/guess";
import { ISolution } from "../models/solution";

export interface IGridProps {
  currentGuess: string;
  guesses: Guess[];
  turn: number;
}

export interface IRowProps {
  guess: Guess;
}

export interface IWordleProps {
  solution: ISolution;
}
