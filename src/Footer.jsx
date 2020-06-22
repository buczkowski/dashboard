import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const timeStamp = new Date().toLocaleString();
  return (
    <footer>
      <hr/>
      <p>Copyright ⓒ {year} Phil Buczkowski</p>
      <p><a href="mailto:phil@buczkowski.us">phil@buczkowski.us</a></p>
      <p>This page loaded at {timeStamp}</p>
    </footer>
  );
}

export default Footer;