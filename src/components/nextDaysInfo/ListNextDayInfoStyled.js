import styled from "styled-components";

export const ListNextDayInfoStyled = styled.div`
  
  display: none;

  @media screen and (min-width: 1515px) {
    display: block;
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    height: 345px;
    width: 550px;
    background: linear-gradient(${({theme}) => theme.borderBackground});
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
	margin: 0 auto;
    border-radius: 20px;
    position: relative;

    ul {
      height: 325px;
      width: 530px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      background: linear-gradient(${({theme}) => theme.primeBackground});
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;