import styled from "styled-components";

export const SearchBarStyled = styled.div`
  padding-top: 10px;
  height: 200px;
  
  .info_error {
	text-align: center;
	font-size: 22px;
    position: relative;
  }
  
  @media screen and (min-width: 1515px) {
    grid-row: span 3 / span 3;
    margin-top: 0;

    input {
      padding: 10px;
    }
  }
`;