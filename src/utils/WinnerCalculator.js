const winnningMatrix = {
    0:[[1,2],[3,6],[4,8]], //? example 0,1,2 o 0,3,6 o 0,4,8
    1:[[0,2],[4,7]],
    2:[[0,1],[5,8],[4,6]],
    3:[[0,6],[4,5]],
    4:[[2,6],[3,5],[1,7],[0,8]],
    5:[[3,4],[2,8]],
    6:[[7,8],[0,3],[2,4]],
    7:[[6,8],[1,4]],
    8:[[6,7],[2,5],[0,4]]
}

export const WinnerCalculator = (cellValues, numberOfTurn, cellIndex) =>{

    const WinningOptions = winnningMatrix[cellIndex];
    for(let WinningOption of WinningOptions){
        
        const currentValue = cellValues[cellIndex];
        const firstOption =  cellValues[WinningOption[0]];
        const secondOption = cellValues[WinningOption[1]];

        if(currentValue === firstOption && firstOption === secondOption ){ 
            return{           
            finish:true,
            winner:currentValue,
            winningCombination:[cellIndex,WinningOption[0],WinningOption[1]]
        };
        }
    }

    if( numberOfTurn === 0 ){
        return{
            finish: true,
            winner: undefined,
            winningCombination:[]
        }
    }
    return{
        finish: false,
        winner: undefined,
        winningCombination:[]
    }
}