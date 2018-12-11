import { css } from 'styled-components';

const offerStyles = props => css`
  box-sizing: border-box;
  background-color: white;
  width: 200px;
  color: #2B2C2E;
  padding: 20px;
  border: 1px solid #C8C8C8;
  border-radius: 4px;
  margin: 0 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 6px;
  }
  &.single {
    width: 400px;
    &:hover {
      box-shadow: none;
    }
  }
  .title {
    font-size: 16px;
  }
  .back {
    display: inline-block;
    margin: 0 auto 10px;
    color: #337ab7;
    &:hover {
      background-color: inherit;
      cursor: pointer;
    }
  }
  img {
    height: 100%;
  }
  .imgContainer {
    height: 100px;
  }
  @media (max-width: 575px) {
      margin: 10px 0;
  }
  @media (max-width: 399px) {
      width: 100%;
      border: none;
      border-radius: 0;
  }
`;

export default offerStyles;
