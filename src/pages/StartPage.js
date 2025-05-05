import { useNavigate } from 'react-router';

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>비건앱 테스트</h1>
      </div>
      <div>
        <button onClick={() => navigate('/nickname')}>시작하기</button>
      </div>
    </div>
  );
}
