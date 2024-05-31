import React from 'react';
import IngredientButton from './IngredientButton';

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <div>
      {ingredients.map(ingredient => (
        <IngredientButton key={ingredient.name} ingredient={ingredient} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default IngredientList;