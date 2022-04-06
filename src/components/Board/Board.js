import './Board.css';
import { useSelector } from 'react-redux';
import { Cell } from '../Cell/Cell';

export const Board = (props) => {
  

  const { cellValues } = useSelector( state => state.GameTotito)  
  const { winningCombination } = useSelector( state => state.GameTotito)
  const cell = cellValues.map((value, index)=>{
        
    const switchOnOff = winningCombination && winningCombination.indexOf(index) >=0;
    return(
        <Cell
            key= { index }
            value = { value }
            switchOnOff = { switchOnOff }
            onClick = { () => props.cellClicked(index) }
        />
    )
  })

  return (
    <div id='board'>
        { cell }
    </div>
  )
}
