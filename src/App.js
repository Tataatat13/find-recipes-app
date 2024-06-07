import { useEffect, useState } from 'react';
import './App.css';
import NewRecipes from './NewRecipes';


function App() {

  const MY_ID ="64ae3205";
  const MI_KEY = "efe52f89dfa7e7eb2727ce43db8060bc";

  const [mySearch, setMySearch] = useState ("");
  const [myRecipes, setMyRecipes] = useState ([]);
  const [wordSubmit, setWordSubmit] = useState("chiken");



useEffect (() => {
    const getRecipe = async () => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MI_KEY}`)
    const data = await response.json();
    setMyRecipes(data.hits)
  }
  getRecipe()
}, [wordSubmit])

const finalSearch =(e)=> {
  e.preventDefault()
  setWordSubmit(mySearch)
}

const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}
  return (
    <div className="App">
      <div className='container'>
          <img className='headfoto' src='https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="foto"/> 
      </div>
      <div className=' container'>
        <h1>Enjoy Your Meal, find best recipe for you</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button className='btn' onClick={finalSearch}>
          <img src= "https://img.icons8.com/?size=100&id=80991&format=png&color=000000" alt='foto' width="30px"/>
        </button>
      </div>
      
      <div>
        {myRecipes.map ((element, index) => (
          <NewRecipes key={index} 
          label={element.recipe.label} 
          image={element.recipe.image} 
          ingredients ={element.recipe.ingredientLines} 
          type={element.recipe.mealType} 
          cuisine={element.recipe.cuisineType}
          frees ={element.recipe.healthLabels} />
        ))}
      </div>    
    </div>
  );
}

export default App;
