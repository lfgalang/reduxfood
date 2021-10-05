
import './App.css';
import Restaurant from './components/Restaurant';
import Food from './components/Food';
import RestaurantList from './components/list/RestaurantList';
import FoodList from './components/list/FoodList';
import User from './components/User';

function App() {
  return (
    <div className="App">

      <User />
      
        <Restaurant /> 
        <Food />
        <RestaurantList />
        <FoodList />
        
      
    </div>
  );
}

export default App;
