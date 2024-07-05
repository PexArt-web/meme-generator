import { useEffect, useState } from 'react';
const {log}  = console
 
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemes, setAllMemes] = useState([])
  const url = `https://api.imgflip.com/get_memes`
  useEffect(()=>{
   async function getMemes (){
    const res = await fetch(url)
    const data = await res.json()
    setAllMemes(data.data.memes)
   }
   getMemes()
  },[url])

 


function handleMeme(){
  const random = Math.floor(Math.random() * allMemes.length)
  const newurl = allMemes[random].url
  setMeme(prevState => {
    return {
      ...prevState,
      randomImage : newurl
    }
  })
}

const handleChange = (event) =>{
  const {name , value} = event.target 
  setMeme(prevMeme => ({
    ...prevMeme,
    [name]:value
  }))
  log(meme)
}
    
  return (
    <main>
      <div className="form">
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control form--inputs"
              placeholder="Top text"
              aria-label="First name"
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form--inputs"
              placeholder="Bottom text"
              aria-label="Last name"
              name='bottomText'
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-secondary rounded" onClick={handleMeme}>
            Get a new meme image <i className="bi bi-image-fill"></i>
          </button>
        </div>
      </div>
      {/* image display */}
     <div className="meme">
     <img src={meme.randomImage } className="img-fluid mx-auto d-block p-4" alt="meme url"/>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
     </div>
    </main>
  ); 
};

export default Meme;
