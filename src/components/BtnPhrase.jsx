import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {
  
 const changePhrase = () => {
    const indexRandom = getRandomNumber(quotes.length)
    const phraseRandom = quotes[indexRandom]
    setPhraseSelected(phraseRandom)
    setBgSelected(photos[getRandomNumber(photos.length)])
 }

  return (
    <button onClick={changePhrase}>Ver otra</button>
  )
}

export default BtnPhrase