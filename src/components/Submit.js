import styled from 'styled-components';

const Submit = styled.button`
  margin-top: auto;
  padding: 16px 0;
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.state.disabled : theme.colors.primary};
  border-radius: 12px;
  color: white;
  width: 100%;
  text-align: center;
  border: none;
`;

export default Submit;
