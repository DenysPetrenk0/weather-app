import styled from "styled-components";

export const LocationSearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;  
  
  .locations {

    &__input {
      border-radius: 20px;
      background: linear-gradient(107deg, rgba(22, 157, 239, 255) 0%, rgba(85, 186, 238, 255) 100%);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      border: none;
      color: white;
      width: 100%;
      height: 35px;
      padding: 10px;
      outline: none;
      

      &::placeholder {
        font-size: 12px;
        color: #d3d3d3;
      }
	  
      &:active,
      &:focus {
        scale: 1.05;
      }
	  
	  &__box {
        position: relative;
	  }
    }

    &__list {
      padding: 10px;
      background: linear-gradient(107deg, rgba(22, 157, 239, 255) 0%, rgba(85, 186, 238, 255) 100%);

      li {
        cursor: pointer;
      }
    }
	
	&__button-delete {
	  border: none;
	  background: transparent;
	  cursor: pointer;
	  position: absolute;
	  top: 50%;
	  right: 5px;
	  transform: translate(0, -50%);
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  
	  &__icon {
		width: 17px;
		height: 17px;
		fill: #ffffff;
	  }
	}
  }
`;