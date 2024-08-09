import React from "react";


function Meme(props) {
  // this is the default memes picture state
  const [memes, update_memes] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function changer(e) {
    const { name, value } = e.target;
    update_memes((prev) => { 
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  // api data
  const [allMeme, update_memes_Images] = React.useState([]);

 React.useEffect(()=>{

  fetch(`https://api/imgflip.com/get_memes`)

  .then(res => res.json())
  
  .then(data => update_memes_Images(data.data.memes))
 },[])
  

  function RenderUrl(e) {
   
    let randomise = Math.floor(Math.random() * allMeme.length);

    let RandomUrl = allMeme[randomise].url;

    update_memes((prev_meme) => {
      return {
        ...prev_meme,
        randomImage: RandomUrl,
      };
    });
  }
 

 
  return (
    <main className="input">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input "
          name="topText"
          onChange={changer}
          value={memes.topText}
        />

        <input
          type="text"
          placeholder="Buttom text"
          className="form-input "
          name="bottomText"
          onChange={changer}
          value={memes.bottomText}
        />

        <button className="button" onClick={RenderUrl}>
          Get a new meme Image ⚽
        </button>
        <div className="meme">
          <img
            src={memes.randomImage}
            className="meme--image"
            alt="Meme Images"
          />

          <h1 className="memes-text    top">{memes.topText}</h1>

          <h1 className="memes-text  bottom">{memes.bottomText}</h1>
        </div>
      </div>
      <div>
         
      
      
      </div>
    </main>
  );
}
export default Meme;

// what is chatgpt?
