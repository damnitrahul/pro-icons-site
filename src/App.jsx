import { useState } from "react";

import "./App.css";
import * as ProIcons from "@procol-tech/pro-icons";

function App() {
  console.log({ ProIcons });
  return (
    <div className="App">
      {Object.values(ProIcons).map((Icon) => (
        <Icon />
      ))}
    </div>
  );
}

export default App;
