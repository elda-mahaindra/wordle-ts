// ---------------------------------------------- modules impor
import { FunctionComponent } from "react";

import { IRowProps } from "./common";

// ---------------------------------------------- the component
const Row: FunctionComponent<IRowProps> = ({ guess }) => {
  // ---------------------------------------------- local state

  // ---------------------------------------------- effects

  // ---------------------------------------------- content
  return guess ? (
    <div className="row past">
      {guess.map((g, i) => (
        <div key={i} className={g.color}>
          {g.key}
        </div>
      ))}
    </div>
  ) : (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
