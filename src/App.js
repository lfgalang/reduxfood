import { Provider } from 'react-redux';
import './App.css';
import RestaurantStore from './redux/Store.jsx';
import Restaurant from './components/Restaurant';
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      
        <Restaurant />
        <List />
      
      
    </div>
  );
}

export default App;
