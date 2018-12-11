import { css } from 'styled-components';

const offersContainerStyles = props => css`
  width: 100%;
  overflow: auto;
  padding-top: 20px;
  color: #333;
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 13px;
  line-height: 18px;
  box-sizing: border-box;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  label {
    margin-right: 10px;
  }
  @media (max-width: 575px) {
      margin: 0;
      padding: 0;
  }
`;

export default offersContainerStyles;
