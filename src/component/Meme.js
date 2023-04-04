import React ,{useState} from "react";
import "./Meme.css";
import memeData from "../memeData";

const Meme = () => {
  const [memeImage, setMemeImage]= useState("https://i.imgflip.com/4acd7j.png");
  function getMemeImage(){
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)
  }
  return (
    <main>  
      <div className="form">
        <input type="text" placeholder="Shut Up" className="form_input"/>
        <input type="text" placeholder="And Take My Money" className="form_input"/>
        <button onClick={getMemeImage}  className="button">Get a new meme image 🖼️</button>
      </div>
      <img className="meme_image" src={memeImage} alt="Meme"/>
    </main>
  );
};

export default Meme;
