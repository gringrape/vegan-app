import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function GenderPage() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    navigate('/userinfo/birthyear');
  };

  return (
    <div>
      <div>
        <h1>성별을 선택해주세요</h1>
        <div>
          <button
            type="button"
            onClick={() => handleGenderSelect('male')}
          >
            남성
          </button>
          <button
            type="button"
            onClick={() => handleGenderSelect('female')}
          >
            여성
          </button>
        </div>
      </div>
    </div>
  );
}
