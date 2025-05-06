import { useState } from 'react';

import { useNavigate } from 'react-router';

import styled from 'styled-components';

const Container = styled.div`
  padding: 2.5em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;  

  form {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;

    p {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

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

const Button = styled.button`
  margin-top: auto;
  padding: 16px 0;
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.state.disabled : theme.colors.primary};
  border-radius: 12px;
  color: white;
  width: 100%;
  text-align: center;
  border: none;
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
    <Container>
      <form>
        <h1>성별을 선택해주세요</h1>
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
      <Button onClick={handleNext} disabled={isNextDisabled}>
        다음
      </Button>
    </Container>
  );
}
