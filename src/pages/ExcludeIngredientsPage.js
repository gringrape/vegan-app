import { useState } from 'react';

import { useNavigate } from 'react-router';

function ExcludeIngredientsPage() {
  const navigate = useNavigate();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const ingredients = [
    { id: 'gluten', name: '글루텐' },
    { id: 'soy', name: '대두' },
    { id: 'nuts', name: '견과류' }
  ];

  const handleIngredientChange = (ingredientId) => {
    setSelectedIngredients(prev => {
      if (prev.includes(ingredientId)) {
        return prev.filter(id => id !== ingredientId);
      } else {
        return [...prev, ingredientId];
      }
    });
  };

  const handleNext = () => {
    navigate('/recipe');
  };

  return (
    <div>
      <h1>제외할 재료 선택</h1>
      <div>
        {ingredients.map((ingredient) => (
          <div key={ingredient.id}>
            <input
              type="checkbox"
              id={ingredient.id}
              checked={selectedIngredients.includes(ingredient.id)}
              onChange={() => handleIngredientChange(ingredient.id)}
            />
            <label htmlFor={ingredient.id}>
              {ingredient.name}
            </label>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
}

export default ExcludeIngredientsPage; 
