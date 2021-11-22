import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {

  React.useEffect(function () {
    document.title = "Arda Tümay"
  }, [])

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
