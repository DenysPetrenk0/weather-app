import styled from "styled-components";

export const CurrentWeatherInfoStyled = styled.div `
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 93%;
  
  .title {
    display: none;
  }

  .current-weather-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      background: linear-gradient(${({theme}) => theme.primeBackground});
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      padding: 5px;
	  width: 100%;
	
	&__border {
      border-radius: 20px;
      background: linear-gradient(${({theme}) => theme.borderBackground});
      position: relative;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
	  width: 100%;
    }
	
	&__box {
      display: flex;
      justify-content: space-around;
      padding: 5px;
      border-bottom: 2px solid ${({theme}) => theme.borderInBlock};
    }

    &__humidity,
    &__cloud {
      position: relative;
    }

    &__icon {
      fill: ${({theme}) => theme.primeText};
      position: absolute;
      top: 0;
      left: -20px;
	  width: 17px;
	  height: 17px;
    }
	
	&__title {
      font-size: 12px;
      text-align: left;
      margin-right: 10px;
    }
	
	&__value {
      margin-top: 20px;
      font-size: 30px;
    }

    &__wind-kph {
      display: flex;
      padding: 10px;
    }
	
	&__icon-wind {
      fill: ${({theme}) => theme.primeText};
      margin-right: 5px;
	  width: 17px;
	  height: 17px;
    }
  }

  @media screen and (min-width: 1515px) {
	position: static;
    grid-row: span 3 / span 3;
    grid-column-start: 4;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 33px;
	  position: relative;
	  z-index: 1;

      &__icon {
		width: 70px;
		height: 70px;
        fill: rgb(208, 198, 18);
      }
    }

    .current-weather-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      width: 400px;
      height: 180px;
      padding: 20px;
	  
	  &__border {
        padding: 10px;
        border-radius: 20px;
        width: 420px;
        height: 200px;
        position: relative;
        margin-bottom: 0;
      }
	  
	  &__box {
        height: 130px;
        padding: 10px;
      }

      &__value {
        font-size: 50px;
      }
	}
  }
`;