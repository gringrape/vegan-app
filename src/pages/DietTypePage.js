import { useState } from 'react';

import { useNavigate } from 'react-router';

import styled from 'styled-components';

import Page from '../components/Page';
import Submit from '../components/Submit';

const Select = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  button {
    min-height: 10em;
    padding: 1em;
  }
`;

const SelectButton = styled.button`
  display: block;
  width: 100%;
  padding: 1.5em 0;
  border-radius: 0.75em;
  border: 1px solid ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.state.disabled};
  color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.text};
  background-color: ${({ theme, selected }) => selected ? theme.colors.primarySuperLight : theme.colors.background};
  font-weight: bold;
`;

const dietTypes = [
  { id: 1, name: '🥦 자연식물식', description: '신선한 식물성 재료 식단' },
  { id: 2, name: '🍔 간편함 + 맛', description: '간단하면서도 맛있는 식단' },
  { id: 3, name: '💪 하이프로틴', description: '고단백 식단' },
  { id: 4, name: '💰 경제적 효율', description: '가성비 좋은 식단' }
];

export default function DietTypePage() {
  const [selectedDietType, setSelectedDietType] = useState(1);

  const isNextDisabled = selectedDietType === '';

  const navigate = useNavigate();

  const handleCardClick = (typeId) => {
    setSelectedDietType(typeId);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/exclude-ingredients');
  };

  return (
    <Page>
      <form>
        <label>
          원하는 식단 유형을 선택해주세요
        </label>
        <p>라이프 스타일에 맞는 식단을 골라보세요</p>
        <Select>
          {dietTypes.map((type) => (
            <SelectButton 
              key={type.id}
              type="button"
              selected={selectedDietType === type.id}
              onClick={() => handleCardClick(type.id)}
            >
              <h3>{type.name}</h3>
              <p>{type.description}</p>
            </SelectButton>
          ))}
        </Select>
      </form>
      <Submit
        type="button"
        onClick={handleSubmit}
        disabled={isNextDisabled}
      >
        다음
      </Submit>
    </Page>
  );
}
