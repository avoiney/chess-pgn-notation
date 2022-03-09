import React from "react";

export default function PGNTable({ moves }) {
  return (
    <React.Fragment>
      <p>PGN</p>
      {moves.map(({ white, black }, moveIdx) => {
        return (
          <span key={moveIdx} style={{ marginRight: "10px" }}>
            {moveIdx + 1}. {white} {black}
          </span>
        );
      })}
    </React.Fragment>
  );
}
