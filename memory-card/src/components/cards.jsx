import pokemon from 'pokemontcgsdk'
import { useEffect } from 'react'

pokemon.configure({apiKey: '8f4f0607-d215-4eee-90a9-b1c336a80f5a'})

export function easyAndMedium (setCards, count) {

    useEffect(() => {
        let ignore = false
        const cardArray = []

        pokemon.card.all({q: 'set.name:Jungle'})
        .then(self => {
            if (!ignore) {
                for (let i = 0; i<count; i++) {
                    const image = self[i].images.small
                    const name = self[i].name
                    
                    cardArray[i]={img: image, clicked: false, id: name}
                    
                }
                setCards(cardArray)
            }
        })
        
        return () => {ignore = true}
 
    },[]) 


}

export function Hard (setCards) {

    useEffect(() => {
        let ignore = false
        const cardArray = []
        const indices = [0,1,2,3,4,5,6,7,8,12]

        pokemon.card.all({q: 'name:pikachu', orderBy:"set.releaseDate"})
        .then(self => {
            if (!ignore) {
                for (let i in indices) {
                    const index = indices[i]
                    const image = self[index].images.small
                    const id = self[index].id
                    
                    cardArray[i]={img: image, clicked: false, id: id}
                    
                }
                setCards(cardArray)
            }
        })
        
        return () => {ignore = true}
 
    },[]) 

}