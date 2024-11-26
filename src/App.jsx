import { useState } from "react";
import "./App.css";
import foodJson from "./foods.json"
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodJson);
  const handleDelete = (event) => {
    const filterfoods = foods.filter((food) => (
      food.id !== event.target.id
    ));
    setFoods(filterfoods);
  };
  const foodBoxes = foods.map(food => <FoodBox key={food.id} food={food} handleDelete={handleDelete} />)
  const handleAddFood = (food) => {
    setFoods([food, ...foods])
  } 
  return (
    <div className="App">
      <h1 className="mb-5">LAB | React IronNutrition</h1>
      <AddFoodForm handleAddFood={handleAddFood} />

      {foodBoxes}

    </div>
  );
}

export default App;
