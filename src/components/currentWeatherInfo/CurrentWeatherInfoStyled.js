import styled from "styled-components";

export const CurrentWeatherInfoStyled = styled.div `
  grid-row: span 3 / span 3;
  grid-column-start: 4;

  .title {
    display: none;
  }

  .current-weather-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      background: linear-gradient(107deg, rgba(22,157,239,255) 0%, rgba(85,186,238,255) 100%);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      padding: 5px;
	
	&__border {
      border-radius: 20px;
      background: linear-gradient(107deg, rgba(34,135,203,255) 0%, rgba(70,165,222,255) 100%);
      position: relative;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
    }
	
	&__box {
      display: flex;
      justify-content: space-around;
      /*height: 80%;*/
      padding: 5px;
      border-bottom: 2px solid rgb(1 147 221);
    }

    &__humidity,
    &__cloud {
      position: relative;
    }

    &__icon {
      fill: white;
      position: absolute;
      top: 0;
      left: -20px;
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
      fill: white;
      margin-right: 5px;
    }
  }

  @media screen and (min-width: 1515px) {
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 33px;

      &__icon {
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