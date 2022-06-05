import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./contexts/menu.context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import { getInvoices } from "./data";
import ToggleDisplay from "./components/ToggleDisplay";
import OCMenu from "./components/OffCanvasMenu";
import { PeopleProvider } from "./contexts/person.context";
import PeopleList from "./components/PeopleList";

// Pages
import AddPeople from "./pages/AddPeople";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Invoice from "./pages/Invoice";
import NotFound from "./pages/NotFound";
import UpdatePerson from "./pages/UpdatePerson";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MenuProvider>
        <PeopleProvider>
          <Header />
          <OCMenu />
          <Routes>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="people/add" element={<AddPeople />} />
            <Route path="people/edit/:id" element={<UpdatePerson />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/invoices/:number" element={<Invoice />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PeopleProvider>
      </MenuProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
