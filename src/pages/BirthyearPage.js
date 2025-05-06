import { useState } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import Page from '../components/Page';
import Submit from '../components/Submit';

const BirthyearInput = styled.input`
  width: 100%;
  padding: 0.8em 1em;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.5em;
`;

export default function BirthyearPage() {
  const navigate = useNavigate();
  const [birthYear, setBirthYear] = useState('');
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleBirthYearChange = (e) => {
    const value = e.target.value;
    setBirthYear(value);
    setIsNextDisabled(value.length !== 4 || value <= 1900 || value >= 2025);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/diet-type');
  };

  return (
    <Page>
      <form>
        <label>
          태어난 연도를 알려주세요
        </label>
        <p>연령대에 맞는 최적 식단을 추천해드려요</p>
        <BirthyearInput
          type="number" 
          placeholder="예시: 1990" 
          value={birthYear}
          onChange={handleBirthYearChange}
          min="1900"
          max="2024"
          pattern="\d{4}"
        />
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
