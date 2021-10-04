
import './App.css';
import Restaurant from './components/Restaurant';
import Food from './components/Food';
import RestaurantList from './components/list/RestaurantList';
import FoodList from './components/list/FoodList';

function App() {
  return (
    <div className="App">
      
        <Restaurant /> 
        <Food />
        <RestaurantList />
        <FoodList />
        
      
    </div>
  );
}

export default App;
