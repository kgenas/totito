import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NewGame } from '../../actions/game';
import './ResultModal.css';

export const ResultModal = () =>{

    const dispatch = useDispatch();
    const { isGameOver, winner } = useSelector( state => state.Game) ;
    const resultMondalClasses = classNames({
        'modal-overlay': true,
        'modal-overlay--modal-open': isGameOver

    })
    const message = winner ? `Winner is ${ winner }.` :'It is a tie';

    const newGame = () =>{
        dispatch(NewGame());
    }
    return(
        <div className= { resultMondalClasses }>
            <div className='game-result-modal'>
                <div className='result-container'>
                    <div className='winner-container'>
                        <span>{ message }</span>
                    </div>
                </div>
                <div className='new-game-container'>
                    <button
                        className='new-game-container__button'
                        onClick={ newGame }
                    >
                        Start New Game
                    </button>
                </div>
            </div>            
        </div>
    )
}