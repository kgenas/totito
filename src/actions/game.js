import { types } from "../types/types";

export const startGame = () =>({
    type: types.start
})

export const Click = (cellValues,numberOfTurn,isNext,isGameOver,winner,winningCombination) =>({
    type: types.click,
    payload:{
        cellValues,
        numberOfTurn,
        isNext,
        isGameOver,
        winner,
        winningCombination
    }  
})

export const NewGame = () =>({
    type: types.newGame
})
