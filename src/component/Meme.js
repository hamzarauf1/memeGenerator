import React from "react";
import "./Meme.css";

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Shut Up" className="form_input"/>
        <input type="text" placeholder="And Take My Money" className="form_input"/>
        <button className="button">Get a new meme image 🖼️</button>
      </form>
    </main>
  );
};

export default Meme;
