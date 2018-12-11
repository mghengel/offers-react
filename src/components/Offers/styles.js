import { css } from 'styled-components';

const offersStyles = props => css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 575px) {
    justify-content: space-evenly;
  }
`;

export default offersStyles;
