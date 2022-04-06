import { types } from "../types/types";

export const startGame = () =>({
    type: types.start
})

export const Clicked = (cellValues,numberOfTurn,isNext,isGameOver,winner,winningCombination) =>({
    type: types.cellValues,
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