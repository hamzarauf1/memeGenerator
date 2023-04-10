import React, { useState } from "react";
import "./Meme.css";
import memeData from "../memeData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/4acd7j.png",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    const {name, value} = event.target;
    setMeme(prevMeme =>({
      ...prevMeme,
      [name]:value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
        type="text" 
        placeholder="Shut Up" 
        className="form_input"
        name="topText"
        value={meme.topText}
        onChange={handleChange}

        />
        <input
          type="text"
          placeholder="And Take My Money"
          className="form_input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme_image" src={meme.randomImage} alt="Meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
