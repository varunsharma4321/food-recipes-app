import React from 'react'
// import './App.css';
import Meal from './Components/meal';
import './Components/style.css'
import { Route, Routes } from 'react-router-dom';
import RecipeInfo from './Components/recipeInfo';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Meal/>}/>
    <Route path='/:MealId' element={<RecipeInfo/>}/>
    </Routes>
    </>
  );
}

export default App;
