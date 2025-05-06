import { useNavigate } from 'react-router';

import styled from 'styled-components';

// TODO: 배경 이미지 추가
const Container = styled.div`
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;


export default function StartPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Image 
        src="assets/images/start-page.png" 
        alt="비건앱 시작페이지" 
        onClick={() => navigate('/nickname')}
      />
    </Container>
  );
}
