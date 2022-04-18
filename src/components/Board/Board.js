import './Board.css';
import { useSelector } from 'react-redux';
import { Cell } from '../Cell/Cell';

export const Board = (props) => {
  
  const { cellValues, winningCombination } = useSelector( state => state.Game)
  const cell = cellValues.map((value, index)=>{
        
    const switchOnOff = winningCombination && winningCombination.indexOf(index) >= 0;
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
    <div className='board'>
        { cell }
    </div>
  )
}
