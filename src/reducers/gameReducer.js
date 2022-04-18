import { types } from "../types/types"

const initialState = {
    cellValues: ['','','','','','','','',''],
    isGameOver: false,
    numberOfTurn: 9,
    winningCombination:[],            
    winner:undefined,
    xIsNext: true
}
export const game = (state = initialState, action) => {
  
    switch(action.type){
        case types.click:            
            return {           
                ...state,                 
                cellValues: action.payload.cellValues,
                isGameOver: action.payload.isGameOver,
                numberOfTurn: action.payload.numberOfTurn,
                winningCombination: action.payload.winningCombination,
                winner: action.payload.winner,
                xIsNext: action.payload.isNext
            }
        case types.newGame:
            return state = initialState
        default:
            return state
        }
}