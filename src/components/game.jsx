import Tilt from 'react-parallax-tilt'
import '../styles/game.css'
import { Modal } from "./modal.jsx";

export function Game({
    cards,
    score,
    hiScore,
    status,
    cardHandler,
    updateScore,
    modalHandler,
    changeScreen
}) {

    console.log(cards)

    function checkValid(e) {

        const index = Number(e.target.id)

        if (cards[index].clicked) {
            modalHandler('loss')
        } else {
            updateScore(score + 1)

            if (score + 1 === cards.length) {
                modalHandler('win')
                return
            }

            cards[index].clicked = true
            setTimeout(() => shuffle(), 500)
            animStart()
        }

    }

    function animStart() {
        const count = cards.length

        for (let i = 0; i < count; i++) {
            document.getElementById(i).classList.add('flip')
            document.getElementById(i).style.pointerEvents = 'none'
            setTimeout(() => { document.getElementById(i).firstChild.style.visibility = 'hidden' }, 150)
        }
    }

    function animEnd() {
        const count = cards.length

        for (let i = 0; i < count; i++) {
            document.getElementById(i).classList.remove('flip')

            // less than 400ms can cause animation to skip if 
            // a card is clicked too soon
            setTimeout(() => { document.getElementById(i).style.pointerEvents = 'initial' }, 400)
            setTimeout(() => { document.getElementById(i).firstChild.style.visibility = 'visible' }, 150)
        }

    }

    function reset() {
        const tempCards = cards

        for (let i = 0; i < tempCards.length; i++) {
            tempCards[i].clicked = false
        }
        cardHandler(tempCards)
    }

    function shuffle() {

        const tempCards = cards

        for (let i = tempCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = tempCards[i]
            tempCards[i] = tempCards[j]
            tempCards[j] = temp
        }
        animEnd()
        cardHandler(tempCards)
    }

    return (
        <main>
            <div className="card-field">
            {
                cards.map((self, index) => (
                    <Tilt key={self.id}>
                        <button className="card" style={{pointerEvents:'none'}} id={index} onClick={checkValid}>
                            <img src={self.img} onLoad={animEnd} style={{ visibility: 'hidden' }} />
                        </button>
                    </Tilt>
                ))
            }
            </div>
            {
                status.length ?
                <Modal status={status}
                    animStart={animStart}
                    reset={reset}
                    updateScore={updateScore}
                    changeScreen={changeScreen}
                    modalHandler={modalHandler}
                    shuffle={shuffle} /> : <></>
            }
        </main>
    )
}