// ---------------------------------------------- modules impor
import { FunctionComponent } from "react";

import { IModalProps } from "./common";

// ---------------------------------------------- the component
const Modal: FunctionComponent<IModalProps> = ({
  isCorrect,
  solutionWord,
  turn,
}) => (
  <div className="modal">
    {isCorrect && (
      <div>
        <h1>You Win!</h1>
        <p className="solution">{solutionWord}</p>
        <p>You found the solution in {turn} guesses :)</p>
      </div>
    )}
    {!isCorrect && (
      <div>
        <h1>Nevermind</h1>
        <p className="solution">{solutionWord}</p>
        <p>Better luck next time :)</p>
      </div>
    )}
  </div>
);

export default Modal;
