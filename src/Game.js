import { Provider } from 'react-redux';
import { Totito } from './components/Game/Totito';
import { store } from './store/store';


export const Game = () => {
  return (
    <Provider store= { store }>
        <Totito/>        
    </Provider>
  )
}
