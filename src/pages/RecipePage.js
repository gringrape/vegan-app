import { useNavigate } from 'react-router';

export default function RecipePage() {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <h1>추천 메뉴</h1>
        <div>
          <h2>아침</h2>
          <p>채소 볶음밥</p>
        </div>
        <div>
          <h2>점심</h2>
          <p>두부 스프</p>
        </div>
        <div>
          <h2>저녁</h2>
          <p>과일 샐러드</p>
        </div>
      </div>
      <div>
        <button onClick={handleRestart}>처음으로</button>
      </div>
    </div>
  );
}
