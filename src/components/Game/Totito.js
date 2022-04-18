import { useDispatch, useSelector } from 'react-redux';
import { Click } from '../../actions/game';
import { WinnerCalculator } from '../../utils/WinnerCalculator';
import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import './Totito.css';

export const Totito = () => {
  
  const dispatch = useDispatch();  
  const { cellValues,xIsNext,numberOfTurn } = useSelector( state => state.Game);

  const isCellEmpty = ( cellIndex ) => cellValues[cellIndex] === '';
  const onCellClicked = (cellIndex) =>{ 
    
    if (isCellEmpty( cellIndex )){
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = xIsNext ? 'X':'O';
      const ResultCalculate = WinnerCalculator( newCellValues,(numberOfTurn-1),cellIndex );

      dispatch(Click(
          newCellValues,
          (numberOfTurn-1),
          !xIsNext,
          ResultCalculate.finish,
          ResultCalculate.winner,
          ResultCalculate.winningCombination));
    }
  }
   
  return (
    <>
      <div className='game'>
        <h1> Totito </h1>     
        <Board
          cellClicked = { onCellClicked } 
        />   
      </div>
      <ResultModal/>
    </>
  )
}
