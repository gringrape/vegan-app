import { useNavigate } from 'react-router';

export default function DietTypePage() {
  const navigate = useNavigate();
  const dietTypes = [
    { id: 1, name: '자연식물식', description: '신선한 식물성 재료를 중심으로 한 식단' },
    { id: 2, name: '간편함 + 맛', description: '간단하면서도 맛있는 식단' },
    { id: 3, name: '하이프로틴', description: '고단백 식단' },
    { id: 4, name: '경제적 효율', description: '가성비 좋은 식단' }
  ];

  const handleCardClick = (typeId) => {
    navigate('/exclude-ingredients');
  };

  return (
    <div>
      <h1>식단 타입을 선택해주세요</h1>
      <div>
        {dietTypes.map((type) => (
          <div 
            key={type.id}
            onClick={() => handleCardClick(type.id)}
          >
            <h3>{type.name}</h3>
            <p>{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
