import { useDispatch, useSelector } from 'react-redux';
import { Clicked } from '../../actions/game';
import { WinnerCalculator } from '../../utils/WinnerCalculator';
import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import './Totito.css';

export const Totito = () => {
  
  const dispatch = useDispatch();  
  const { cellValues,xIsNext,numberOfTurn } = useSelector( state => state.GameTotito);

  const onCellClicked = (cellIndex) =>{ 
    
    const newCellValues = [...cellValues];
    newCellValues[cellIndex] = xIsNext ? 'X':'O';
    const ResultCalculate = WinnerCalculator( newCellValues,(numberOfTurn-1),cellIndex );

    dispatch(Clicked(
        newCellValues,
        (numberOfTurn-1),
        !xIsNext,
        ResultCalculate.finished,
        ResultCalculate.winner,
        ResultCalculate.winningCombination));

  }
   
  return (
    <>
      <div id='game'>
        <h1> Totito </h1>     
        <Board
          cellClicked = { onCellClicked } 
        />   
      </div>
      <ResultModal/>
    </>
  )
}
