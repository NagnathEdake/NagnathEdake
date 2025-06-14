import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();
  console.log(recipeId);

  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
      setRecipe(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("api error");
    }
  };
  return (
    <div className="container mt-5 p-5">
      <div className="card mb-3 " onClick={() => getIngredients(recipe)}>
        <div className="p-5 d-flex justify-content-center ">
          <img
            style={{
              width: "80%",
              height: "400px ",
            }}
            src={recipe.image}
            className="  rounded "
            alt="image"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">{recipe.ingredients}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
