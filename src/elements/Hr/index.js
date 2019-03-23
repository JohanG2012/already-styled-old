import styled from 'styled-components';

const Hr = styled.hr`
  color: ${props => (props.color ? props.color : 'black')};
  height: 1px;
  backgroundcolor: ${props => (props.color ? props.color : 'black')};
  border: none;
`;

export default Hr;
