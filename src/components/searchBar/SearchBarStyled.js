import styled from "styled-components";

export const SearchBarStyled = styled.div`
  padding-top: 10px;
  
  .info_error {
	text-align: center;
	font-size: 22px;
  }
  
  @media screen and (min-width: 1515px) {
    grid-row: span 3 / span 3;
    //width: 340px;
    //height: 50px;
    margin-top: 0;

    input {
      //width: 320px;
      //height: 30px;
      padding: 10px;
    }
  }
`;