import { useState } from "react";
import foodJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
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
        <>
            <h1 className="mb-5">LAB | React IronNutrition</h1>
            <AddFoodForm handleAddFood={handleAddFood} />

            {foodBoxes}
        </>
    );
}

export default FoodList;