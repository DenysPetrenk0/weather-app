import styled from "styled-components";

export const InfoTimeStyled = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  
  p {
	font-size: 30px;
	text-align: center;
  }
  
  @media screen and (min-width: 1515px) {
    top: 350px;
    right: 150px;
  }
`;