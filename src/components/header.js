import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      |<NavLink to="/">INBOX</NavLink>||
      <NavLink to="/spam">SPAM</NavLink>||
      <NavLink to="/trash">TRASH</NavLink>|
    </nav>
  );
}
