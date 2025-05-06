import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import styled from 'styled-components';

import Page from '../components/Page';
import Submit from '../components/Submit';


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
    <Page>
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
      <Submit onClick={handleNext} disabled={isNextDisabled}>
        다음
      </Submit>
    </Page>
  );
}
