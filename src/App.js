import React, { useState } from 'react';
import { INGREDIENTS } from './ingredients';
import IngredientList from './components/IngredientList';
import Burger from './components/Burger';

const BASE_PRICE = 30;

const App = () => {
  const [ingredients, setIngredients] = useState(
    INGREDIENTS.map(ingredient => ({ ...ingredient, count: 0 }))
  );

  const addIngredient = (ingredient) => {
    setIngredients(prevIngredients =>
      prevIngredients.map(ing =>
        ing.name === ingredient.name ? { ...ing, count: ing.count + 1 } : ing
      )
    );
  };

  const removeIngredient = (ingredient) => {
    setIngredients(prevIngredients =>
      prevIngredients.map(ing =>
        ing.name === ingredient.name && ing.count > 0 ? { ...ing, count: ing.count - 1 } : ing
      )
    );
  };

  const totalPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.count * ingredient.price, BASE_PRICE);

  return (
    <div>
      <IngredientList ingredients={INGREDIENTS} onAdd={addIngredient} />
      <Burger ingredients={ingredients.filter(ingredient => ingredient.count > 0)} totalPrice={totalPrice} onRemove={removeIngredient} />
    </div>
  );
};

export default App;
