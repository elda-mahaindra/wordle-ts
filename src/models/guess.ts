// ---------------------------------------------- document interfaces
export interface IGuessPair {
  key: string;
  color: string;
}

const newGuessPair = (): IGuessPair => ({ key: "", color: "" });

export type Guess = IGuessPair[];

export const newGuess = (): Guess => Array(5).map(() => newGuessPair());
