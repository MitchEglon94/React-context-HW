import React from "react";
import "./App.css";
import Header from "./components/Header";
import { getInvoices } from "./data";
import { Link } from "react-router-dom";
import Invoice from "./pages/Invoice";
import PeopleList from "./components/PeopleList";

import OCMenu from "./components/OffCanvasMenu";

function App() {
  let invoices = getInvoices();
  return (
    <div className="App">
      <PeopleList />
    </div>
  );
}

export default App;
