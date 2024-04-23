import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import getRandomNumber from './utils/getRandomNumber'
import BtnPhrase from './components/BtnPhrase'
import Phrase from './components/Phrase'

function App() {
 
const indexRandom = getRandomNumber(quotes.length)

 const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])
 const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)])

const objStyle = {
  backgroundImage: `url(/images/fondo${bgSelected}.jpg)`
}
const h1Style = {
  marginButton: '20px'
}

  return (
    <div className='style' style={objStyle}>
      <h1 style={h1Style} >Galleta de la fortuna</h1>
      <article>
      <Phrase 
      phraseSelected={phraseSelected} 
      />
      <BtnPhrase setPhraseSelected={setPhraseSelected} 
      setBgSelected={setBgSelected}
      />
      </article>
      </div>
  )
 }
export default App