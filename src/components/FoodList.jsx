import { useState } from "react";
import foodJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
    const [foods, setFoods] = useState(foodJson);
    const [search, setSearch] = useState("");

    const handleDelete = (event) => {
        const filterfoods = foods.filter((food) => (
            food.id !== event.target.id
        ));
        setFoods(filterfoods);
    };
    
    const foodBoxes = foods.filter(food => (
        food.name.toLowerCase().includes(search.toLowerCase())
    ))
        .map(food => <FoodBox key={food.id} food={food} handleDelete={handleDelete} />);

    const handleAddFood = (food) => {
        setFoods([food, ...foods])
    };

    const handleSearch = (event) => {
        setSearch(event.target.value)
    };
    return (
        <>
            <h1 className="mb-5">LAB | React IronNutrition</h1>
            <AddFoodForm handleAddFood={handleAddFood} />
            <Search search={search} handleSearch={handleSearch} />
            {foodBoxes}
        </>
    );
}

export default FoodList;