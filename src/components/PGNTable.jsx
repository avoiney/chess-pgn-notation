import React from "react";

export default function PGNTable({ moves }) {
  return (
    <React.Fragment>
      <p>PGN</p>
      <section>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>White</th>
              <th>Black</th>
            </tr>
          </thead>
          <tbody>
            {moves.map(({ white, black }, moveIdx) => {
              return (
                <tr key={moveIdx}>
                  <td>{moveIdx + 1}</td>
                  <td>{white}</td>
                  <td>{black}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </React.Fragment>
  );
}
