import React from "react";
import { MdDashboard } from "react-icons/md";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="liLeft">
            
            <a href="https://dashboard.buczkowski.us">
            <MdDashboard className="react-icons" /> Dashboard
            </a>
          </li>
          <li>
          <form className="liRight" method="get" action="https://www.google.com/search" target="_blank">
            <input type="text" aria-label="Search" name="q" />
            <button type="submit">Search</button>
          </form>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;