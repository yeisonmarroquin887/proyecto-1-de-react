import Button from './Button'
import './phrase.css'



const Phrase = ( {Phrases, clickButton, moneyRandon} ) => {

 const styleButton = {
  backgroundImage: moneyRandon
 }

  return (
    <div className="phrase">
        <h1 id='tittle'>Galleta De La <br />
        Fortuna...</h1>
        
        <div className="p">
        <p>{Phrases.phrase}</p>
        <p><b>{Phrases.author}</b></p>
        <Button
        clickButton={clickButton}
        styleButton={styleButton}
        />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
       <div></div>
       
    </div>
  )
}

export default Phrase