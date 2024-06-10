import { useState, useEffect } from 'react'
import './App.css'
import { easyAndMedium } from './components/cards.jsx'
import { Hard } from './components/cards.jsx'
import { Game } from './components/game.jsx'
import { Menu } from './components/menu.jsx'
import { Loading } from './components/loading.jsx'
import { Header } from './components/header.jsx'

export default function App () {
  
    const [images, setImages] = useState([])
    const [score, setScore] = useState(0)
    const [hiScore, setHiScore] = useState(0)
    const [easy, setEasy] = useState([])
    const [medium, setMedium] = useState([])
    const [hard, setHard] = useState([])
    const [screen, setScreen] = useState('menu')
    const [loaded, setLoaded] = useState(false)
    const [status, setStatus] = useState('')

    useEffect(() => {
      setLoaded(easy.length && medium.length && hard.length)
    },[easy,medium,hard])

    const easyLength = 5;
    const mediumLength = 10

    easyAndMedium(easyHandler, easyLength)
    easyAndMedium(mediumHandler, mediumLength)
    Hard(hardHandler)
    
    
    function setCards (arr) {
      const newThing = structuredClone(arr)
      setImages(newThing)
    }

    function easyHandler (arr) {
      setEasy(arr)
    }

    function mediumHandler (arr) {
      setMedium(arr)
    }

    function hardHandler (arr) {
      setHard(arr)
    }

    function updateScore (newScore) {
      setScore(newScore)
      newScore>hiScore && setHiScore(newScore)
    }

    function startGame (e) {
      e.preventDefault()

      changeScreen('game')
      switch (e.target.id) {
        case 'easy':
          setImages(structuredClone(easy))
          break;
        case 'medium':
          setImages(structuredClone(medium))
          break;
        case 'hard':
          setImages(structuredClone(hard))
          break; 
      }
      
    }
    function changeScreen (screen) {
      setScreen(screen)
      setScore(0)
    }

    function modalHandler (cond) {
      setStatus(cond)
    }

    return (
      <>
      <Header 
        score={score} 
        hiScore={hiScore} 
        changeScreen={changeScreen}
        />
      {
        loaded ? (
          
        screen === 'menu' ?
          <Menu startGame={startGame}/>
        :
          <Game cards={images}
              score={score} 
              hiScore={hiScore}
              status={status}
              cardHandler={setCards} 
              updateScore={updateScore}
              modalHandler={modalHandler}
              changeScreen={changeScreen}
              />
        ) : <Loading/>
      }
      </>
    )
}