import easyDif from '../assets/easy.webp'
import mediumDif from '../assets/medium.webp'
import hardDif from '../assets/hard.webp'
import '../styles/menu.css'

export function Menu ({ startGame }) {
    
    return (
    <main className='menu'>
        <button onClick={startGame} className='difficulty' id='easy'><img className='diff-button' src={easyDif}/></button>
        <button onClick={startGame} className='difficulty' id='medium'><img className='diff-button' src={mediumDif}/></button>
        <button onClick={startGame} className='difficulty' id='hard'><img className='diff-button' src={hardDif}/></button>
    </main>
  )
}