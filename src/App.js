import "./styles.css";
import { React } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

//import Inbox from "./pages/inbox"
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
