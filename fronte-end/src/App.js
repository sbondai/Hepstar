import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MultisepForm from "./components/MultisepForm";

function App() {
  return (
    <div>
      <Route path="/" component={MultisepForm} />
    </div>
  );
}

export default App;
