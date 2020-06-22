import React from "react";
import Header from "./Header";
import Lead from "./Lead";
import Today from "./Today";
import Weather from "./Weather";
import Todo from "./Todo";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Lead />
      <div className="grid-container">
        <Today className="grid-item" />
        <Todo className="grid-item" />
        <Weather className="grid-item" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
