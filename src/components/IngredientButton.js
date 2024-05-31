import React from 'react';

const IngredientButton = ({ ingredient, onAdd }) => {
  return (
    <button onClick={() => onAdd(ingredient)}>
      <img src={ingredient.image} alt={ingredient.name} />
      {ingredient.name}
    </button>
  );
};

export default IngredientButton;