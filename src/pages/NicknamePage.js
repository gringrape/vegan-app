import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router';

function NicknamePage() {
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
    <div>
      <div>
        <h1>닉네임 생성</h1>
        <div>
          <form>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="닉네임을 입력하세요"
            />
          </form>
        </div>
      </div>
      <div>
        <button onClick={handleNext} disabled={isNextDisabled}>
          다음
        </button>
      </div>
    </div>
  );
}

export default NicknamePage; 
