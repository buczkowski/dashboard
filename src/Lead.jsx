import React, { useState } from "react";

function Lead() {
  const [name, setName] = useState(
    localStorage.getItem('nameStorage') || ''
  );

  function handleClick(event) {
    setName(name);
    localStorage.setItem('nameStorage', name);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div id="lead">
    {localStorage.getItem('nameStorage') ? (
      <p className="lead">Hello {name}, what is your objective today?</p>
    ) : (
      <div>
        <p className="leadform">What is your name?</p>
        <form>
          <input className="leadform" value={name} onChange={handleChange} type="text"  />
          <button className="leadform" onClick={handleClick}>Submit</button>
        </form>
      </div>
    )}
    </div>
  );
}

export default Lead;