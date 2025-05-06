import styled from 'styled-components';

const Page = styled.div`
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

    label {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      display: block;
    }

    p {
      color: ${({ theme }) => theme.colors.textLight};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      margin-bottom: 0; 
      line-height: 2;
    }
  }
`;

export default Page;
