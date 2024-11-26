// Your code here
function FoodBox({ foods }) {
    return (
        <div>
            {foods.map((food) => (
                <div key={food.id} className="container border border-black d-flex flex-column align-items-center mt-1 p-3">
                    <p className="fs-1 fw-bold">{food.name}</p>
                    <img width="350px" src={food.image}/>
                    <p>Calories: {food.calories}</p>
                    <p>Servings <b>{food.servings}</b></p>
                    <p>
                        <b>Total Calories: {food.servings * food.calories} </b> kcal
                    </p>
                    <button>Delete</button>
                </div>
            ))}

        </div>
    );
}

export default FoodBox;
