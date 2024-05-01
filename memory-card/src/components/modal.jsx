import '../styles/modal.css'

export function Modal ({ 
    status,
    animStart,
    reset,
    updateScore,
    changeScreen,
    modalHandler,
    shuffle
 }) {

    function playAgain () {
        animStart()
        reset()
        updateScore(0)
        modalHandler('')
        setTimeout(() => shuffle(),500)
    }

    function menu () {
        reset()
        changeScreen('menu')
        updateScore(0)
        modalHandler('') 
    }

    return (
        <>
        { 
            status==='win' ?
            <div className='modal-overlay'>
                <div className='win-modal modal'>
                    <div className='modal-buttons'>
                        <button onClick={playAgain} className='modal-button'>Play again</button>
                        <button onClick={menu} className='modal-button'>Menu</button>
                    </div>
                </div>
            </div> : 
            <div className='modal-overlay'>
                <div className='loss-modal modal'>
                    <div className='modal-buttons'>
                        <button onClick={playAgain} className='loss modal-button'>Play again</button>        
                        <button onClick={menu} className='loss modal-button'>Menu</button>
                    </div>
                </div>
            </div>
        }
        </>
    )
}