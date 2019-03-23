import styled, { css } from 'styled-components';

const centerBlock = css`
  display: block;
  margin: 0 auto;
`;

const Image = styled.img`
  ${props => props.center && centerBlock}
`;

export default Image;
