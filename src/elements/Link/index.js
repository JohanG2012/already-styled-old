import styled from 'styled-components';

const Link = styled.a`
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  text-decoration: none;
  transition: font-weight ease-in 0.3s;
  :hover {
    font-weight: 400;
    transition: font-weight ease-out 0.3s;
  }
`;

export default Link;
