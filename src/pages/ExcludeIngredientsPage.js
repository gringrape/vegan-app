import { useState } from 'react';

import { useNavigate } from 'react-router';

import styled from 'styled-components';

import Page from '../components/Page';
import Submit from '../components/Submit';

const Select = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`;

const SelectButton = styled.button`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  display: block;
  width: 100%;
  padding: 1.5em 0;
  border-radius: 0.75em;
  border: 1px solid ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.state.disabled};
  color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.text};
  background-color: ${({ theme, selected }) => selected ? theme.colors.primarySuperLight : theme.colors.background};
  font-weight: bold;
`;

const ingredients = [
  { id: 'eggs', name: '🥚 달걀' },
  { id: 'beans', name: '🥜 콩/견과류' },
  { id: 'meat', name: '🐓 가금류' },
  { id: 'fish', name: '🐟 어패류' },
  { id: 'fruit', name: '🍉 과일' },
];

function ExcludeIngredientsPage() {
  const navigate = useNavigate();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

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
    <Page>
      <form>
        <label>안먹는 재료가 있나요?</label>
        <p>정확한 식단추천을 위해 제외할 재료를 모두 선택해주세요</p>
        <Select>
          {ingredients.map((ingredient) => (
            <SelectButton
              key={ingredient.id} 
              type="button"
              selected={selectedIngredients.includes(ingredient.id)}
              onClick={() => handleIngredientChange(ingredient.id)}
            >
              {ingredient.name}
            </SelectButton>
          ))}
        </Select>
      </form>
      <Submit onClick={handleNext}>
        다음
      </Submit>
    </Page>
  );
}

export default ExcludeIngredientsPage; 
