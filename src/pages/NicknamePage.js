import { useEffect, useState } from 'react';

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
    gap: 1em;
  }

  label {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    display: block;
  }
`;

const Input = styled.input`
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
`;

const GenerateButton = styled.button`
  padding: 0.8em 1em;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
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

export default function NicknamePage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const adjectives = ['엄청난', '계획적인', '당당한', '부끄러운', '신나는', '열정적인'];
  const vegetables = ['당근', '브로콜리', '토마토', '오이', '양배추', '숙주나물', '표고버섯'];
  
  const generateNickname = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomVegetable = vegetables[Math.floor(Math.random() * vegetables.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    const newNickname = `${randomAdjective}${randomVegetable}${randomNumber}`;
    setNickname(newNickname);
    setIsNextDisabled(false);
  };

  useEffect(() => {
    generateNickname();
  }, []);

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    setIsNextDisabled(newNickname.trim() === '');
  };

  const handleNext = () => {
    navigate('/userinfo/gender');
  };

  return (
    <Container>
      <form>
        <label>닉네임을 설정해주세요</label>
        <Input
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="닉네임을 입력하세요"
        />
        <GenerateButton type="button" onClick={generateNickname}>
          랜덤 생성
        </GenerateButton>
      </form>
      <Button onClick={handleNext} disabled={isNextDisabled}>
        다음
      </Button>
    </Container>
  );
}
