import { Provider } from 'react-redux';
import './App.css';
import RestaurantStore from './redux/Store.jsx';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div className="App">
      {/* Para hacerle saber a react que hay un store se usa el provider */}
      <Provider store={RestaurantStore} >
        <Restaurant />
      </Provider>
      
    </div>
  );
}

export default App;
