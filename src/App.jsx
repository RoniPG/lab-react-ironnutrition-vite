import { useState } from "react";
import "./App.css";
import foodJson from "./foods.json"
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodJson);
  const handleDelete = (event) => {
    const filterfoods = foods.filter((food) => (
      food.id !== event.target.id
    ));
    setFoods(filterfoods);
  };
  return (
    <div className="App">
      <h1 className="mb-5">LAB | React IronNutrition</h1>
      <FoodBox foods={foods} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
