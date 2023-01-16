import "./App.css";
import foodsArray from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchFood from "./components/Search";

function App() {
  const [foodsData, setFoodsData] = useState(foodsArray); 
  const [foods, setFoods] = useState(foodsArray); 

  function addFoodForm(newFood) {
    console.log(newFood);

    setFoods([newFood, ...foods]);
    setFoodsData([newFood, ...foodsData]);
  }

  function searchWord(string) {
    let filteredFoods = foodsData.filter((food) => {
      console.log(food.name.toLowerCase().includes(string.toLowerCase()));
      return food.name.toLowerCase().includes(string.toLowerCase());
    });
    console.log(filteredFoods);
    setFoods(filteredFoods);
  }

  function deleteF(foodToDelete) {
    const toDelete = foodsData.filter((food) => food !== foodToDelete);
    setFoodsData(toDelete);
    setFoods(toDelete);
  }

  function toggleForm() {
    document.getElementById("addNewFoodDiv").classList.toggle("hidden");
    document.getElementById("addNewFoodBtn").classList.toggle("hidden");
  }

  return (
    <div className="App">
      <SearchFood filterWord={searchWord} />
      <button onClick={() => toggleForm()}>
        Add New Food
      </button>
      <div>
        <AddFoodForm addFoodForm={addFoodForm} />
        <button onClick={() => toggleForm()}>Hide This</button>
      </div>

      {foods.length ? (
        foods.map((food, index) => (
          <div key={food.name + `${index}`}>
            <FoodBox food={food} deleteF={deleteF} />
          </div>
        ))
      ) : (
        <div>
          <p>Oops There is no more content to show!</p>
          <img src="../Empty.png" alt="noMoreContent"/>
        </div>
      )}
    </div>
  );
}

export default App;
