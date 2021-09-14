import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Rodr</span>
        <span className="remainder">igo</span>
      </div>
      <div className="typed-keys">adsarodrjaja</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>profissional</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
