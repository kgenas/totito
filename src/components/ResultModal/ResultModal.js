import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NewGame } from '../../actions/game';
import './ResultModal.css';

export const ResultModal = () =>{

    const dispatch = useDispatch();
    const { isGameOver, winner } = useSelector( state => state.GameTotito) ;
    const resultMondalClasses = classNames({
        'modal-open': isGameOver
    })
    const message = winner ? `Winner is ${ winner }.` :'It is a tie';

    const newGame = () =>{
        dispatch(NewGame());
    }
    return(
        <div id='modal-overlay' className={ resultMondalClasses }>
            <div id='game-result-modal'>
                <div id='result-container'>
                    <div id='winner-container'>
                        <span>{ message }</span>
                    </div>
                </div>
                <div id='new-game-container'>
                    <button
                        id='new-game-container'
                        onClick={ newGame }
                    >
                        Start New Game
                    </button>
                </div>
            </div>            
        </div>
    )
}