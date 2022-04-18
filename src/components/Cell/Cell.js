import './Cell.css';
import classNames from 'classnames';

export const Cell = ( props ) => {
  
    const cellCss = classNames({
        cell: true,
        winner: props.switchOnOff
    })

    const cellContentCss = classNames({
        'cell--contet': true,
        populated: props.value 
    })

  return (
    <button
        className={ cellCss }
        onClick = { props.onClick }
    >
        <span
            className={ cellContentCss }
        >
            { props.value }
        </span>
    </button>
  )
}
