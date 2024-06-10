import '../styles/header.css'
import siteLogo from '../assets/Site-logo.webp'

export function Header({ score, hiScore, changeScreen }) {

    return (
        <header>
            <button className='back' onClick={() => changeScreen('menu')}>
                <img className='logo' src={siteLogo} />
            </button>
            <div className='scores'>
                <label className='score-label'>
                    score:
                    <h1 className='score-number'>{score}</h1>
                </label>
                <label className='score-label'>
                    hiScore:
                    <h1 className='score-number'>{hiScore}</h1>
                </label>
            </div>
        </header>
    )
}