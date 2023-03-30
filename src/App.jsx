import { useState } from 'react'
import './App.css'
import Phrase from './components/Phrase'
import Phrases from './utils/phrases.json'
import getRandonArray from './utils/getRandonArray'
import getRandonMoney from './utils/getRandonMoney'




const arraymoney = [1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(arraymoney)
function App() {


  const [PhraseRandom, setUserRandom] = useState(getRandonArray(Phrases))
  const [moneyRandom, setMoneyRandom] = useState(getRandonMoney(arraymoney))
  const clickButton = () => {
    setUserRandom(getRandonArray(Phrases))
    setMoneyRandom(getRandonMoney(arraymoney))
  }

  const appStyle = {
   backgroundImage: `url('./backgraouds/fondo${moneyRandom}.png')`
  }

  return (
  <div style={appStyle} className="App">
  <Phrase 
   Phrases={getRandonArray(Phrases)}
   clickButton={clickButton}
   moneyRandon={getRandonMoney}
  />
      <footer>
      <a href="https://github.com/yeisonmarroquin887/proyecto-1-de-react.git">Repositorio</a>
      
    </footer>
  </div>
  )
}

export default App
