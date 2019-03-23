import styled, { css } from 'styled-components';

const statusStyle = css`
  display: inline-block;
  margin-left: 10px;
  color: black;
`;

const Text = styled.p`
  color: ${props => (props.error ? props.theme.error : props.theme.primary)};
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-size: ${props => (props.fontSize ? props.fontSize : 'medium')}
  font-family: ${props => (props.font ? props.font : 'inherit')}
    ${props => props.status && statusStyle};
`;

export default Text;
