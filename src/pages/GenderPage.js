import { useState } from 'react';

import { useNavigate } from 'react-router';

import styled from 'styled-components';

import Page from '../components/Page';
import Submit from '../components/Submit';

const Select = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
`;

const GenderButton = styled.button`
  display: block;
  width: 100%;
  padding: 1.5em 0;
  border-radius: 0.75em;
  border: 1px solid ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.state.disabled};
  color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.text};
  background-color: ${({ theme, selected }) => selected ? theme.colors.primarySuperLight : theme.colors.background};
  font-weight: bold;
`;

export default function GenderPage() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState('female');

  const isNextDisabled = !selectedGender;

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNext = () => {
    navigate('/userinfo/birthyear');
  };

  return (
    <Page>
      <form>
        <label>성별을 선택해주세요</label>
        <p>성별에 맞는 식단을 알려드려요</p>
        <Select>
          <GenderButton
            type="button"
            selected={selectedGender === 'female'}
            onClick={() => handleGenderSelect('female')}
          >
            여성
          </GenderButton>
          <GenderButton
            type="button"
            selected={selectedGender === 'male'}
            onClick={() => handleGenderSelect('male')}
          >
            남성
          </GenderButton>
        </Select>
      </form>
      <Submit onClick={handleNext} disabled={isNextDisabled}>
        다음
      </Submit>
    </Page>
  );
}
