import "./styles.css";
import { React } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Inbox } from "./pages/inbox.js";
import { Spam } from "./pages/spam.js";
import { Trash } from "./pages/trash.js";

//import Inbox from "./pages/inbox"
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Shashank's Mailbox</h1>

      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}
