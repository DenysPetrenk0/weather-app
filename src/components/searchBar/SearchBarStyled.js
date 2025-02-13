import styled from "styled-components";

export const SearchBarStyled = styled.div`
  //background: rgb(208, 198, 18);
  //box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  //padding: 10px;
  //border-radius: 20px;
  position: relative;
  //margin-top: 10px;
  //width: 100%;
  //height: 50px;

  .countries {
	
	&__input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      background: linear-gradient(107deg, rgba(22, 157, 239, 255) 0%, rgba(85, 186, 238, 255) 100%);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      border: none;
      color: white;
      width: 93%;
      height: 40px;
      padding: 10px;
      outline: none;

      &::placeholder {
        font-size: 12px;
        color: #d3d3d3;
      }

      &:hover,
      &:active,
      &:focus {
        outline: none;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 1.2);
        background: linear-gradient(107deg, rgb(70 179 246) 0%, rgb(24 112 157) 100%);
      }
    }
	
	&__list {
	  position: absolute;
      top: 38px;
      left: 18px;
      padding: 6px;
      width: 89%;
      background: linear-gradient(107deg, rgba(22, 157, 239, 255) 0%, rgba(85, 186, 238, 255) 100%);
	  
	  li {
		cursor: pointer;
	  }
	}
  }
  
  .cities {
	
	&__input {
      position: absolute;
      top: 100%;
      left: 4%;
      //transform: translate(-50%, -50%);
      border-radius: 20px;
      background: linear-gradient(107deg, rgba(22, 157, 239, 255) 0%, rgba(85, 186, 238, 255) 100%);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      border: none;
      color: white;
      width: 93%;
      height: 40px;
      padding: 10px;
      outline: none;

      &::placeholder {
        font-size: 12px;
        color: #d3d3d3;
      }
	}
	
	&__list {
      position: absolute;
      top: 83px;
      left: 18px;
      padding: 6px;
      width: 89%;
      background: linear-gradient(107deg, rgba(22, 157, 239, 255) 0%, rgba(85, 186, 238, 255) 100%);

      li {
        cursor: pointer;
      }
	}
  }

  .search_bar_button {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translate(0, -50%);
    border: none;
    background: transparent;

    &_icon {
      fill: white;
      cursor: pointer;

      &:hover {
        scale: 1.1;
      }
    }
  }

  @media screen and (min-width: 1515px) {
    grid-column: span 2 / span 2;
    grid-column-start: 4;
    grid-row-start: 3;
    width: 340px;
    height: 50px;
    margin-left: 30px;
    margin-top: 0;

    input {
      width: 320px;
      height: 30px;
      padding: 10px;
    }
  }
`;