import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipesList() {
  const [recipes, setRecipe] = useState([]);
  const navigate = useNavigate();

  const getIngredients = (data) => {
    // alert(data.ingredients);
    navigate(`/recipeslist/${data.id}`, { replace: true });
  };

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      // console.log(res.data.recipes);
      setRecipe(res.data.recipes);
    } catch (error) {
      console.log("api error");
    }
  };

  return (
    <div
      className="container recipe mt-5 p-3"
      style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
    >
      {recipes.map((recipe, index) => {
        return (
          <div key={index} className="mt-5">
            <div
              className="card"
              style={{ width: "18rem", marginRight: "18px" }}
              onClick={() => getIngredients(recipe)}
            >
              <img src={recipe.image} className="card-img-top" alt="image" />
              <div className="card-body h6">
                <h5 className="card-title ">{recipe.name.slice(0, 13)}...</h5>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipesList;
