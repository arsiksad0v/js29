import React from 'react';

const Burger = ({ ingredients, totalPrice, onRemove }) => {
  return (
    <div>
      <div>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <img src={ingredient.image} alt={ingredient.name} />
            {ingredient.name} x {ingredient.count}
            <button onClick={() => onRemove(ingredient)}>Удалить</button>
          </div>
        ))}
      </div>
      <div>Цена: {totalPrice} сом</div>
    </div>
  );
};

export default Burger;