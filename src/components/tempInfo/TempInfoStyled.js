import styled from "styled-components";

export const TempInfoStyled = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(${({theme}) => theme.borderBackground});
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  height: 220px;
  width: 100%;

  .temp_info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background: linear-gradient(${({theme}) => theme.primeBackground});
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    height: 200px;
    width: 93%;
    display: flex;
    justify-content: space-around;
	
	&__box {
      display: flex;
      padding: 10px;
      font-size: 80px;
      align-items: center;
	  
	  & p:last-child {
		font-size: 50px;
	  }
    }

    &__second_box {
	  display: flex;
      flex-direction: column;
      justify-content: center;
      width: 32%;
      padding: 10px;
      border-left: 2px solid ${({theme}) => theme.borderInBlock};
      font-size: 12px;

      & p:last-child {
        font-size: 30px;
        text-align: center;
      }
    }
  }
  
  @media screen and (min-width: 1515px) {
      grid-row: span 2 / span 2;
      grid-row-start: 5;
      height: 200px;
      width: 430px;

    .temp_info {
      padding: 20px;
      height: 180px;
      width: 410px;
	  
	  &__box {
        font-size: 80px;
      }
	  
	  &__second_box {
        width: 150px;
      }
    }
  }
`;