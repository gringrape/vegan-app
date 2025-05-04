import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BirthyearPage() {
  const navigate = useNavigate();
  const [birthYear, setBirthYear] = useState('');
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleBirthYearChange = (e) => {
    const value = e.target.value;
    setBirthYear(value);
    setIsNextDisabled(value === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/diet-type');
  };

  return (
    <div>
      <h1>
        사용자 정보 입력
      </h1>
      <form>
        <input 
          type="number" 
          placeholder="출생연도를 입력하세요 (예: 1990)" 
          value={birthYear}
          onChange={handleBirthYearChange}
          min="1900"
          max="2024"
          pattern="\d{4}"
        />
      </form>
      <div>
        <button 
          type="button" 
          onClick={handleSubmit}
          disabled={isNextDisabled}
        >
          다음
        </button>
      </div>
    </div>
  );
}
