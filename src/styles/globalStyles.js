import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: ${({theme}) => theme.primeText};
    font-family: "Ubuntu", serif;
    line-height: 1.2;
    letter-spacing: 0.03em;
    max-width: 100%;
    overflow-x: hidden;
	margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  #root {
    position: relative;
    max-width: 390px;
    height: 844px;
    background: linear-gradient(${({theme}) => theme.backgroundColor});
    overflow: hidden;
  }

  .App {
    padding: 10px;
    position: relative;
	height: 100%;
  }

  .title_mob_box {
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .title_mob_icon{
    height: 40px;
    width: 40px;
    fill: rgb(208, 198, 18);
  }

  .weather-video {
	display: none;
  }

  @media screen and (min-width: 580px) {
    #root {
      max-width: 610px;
    }
  }

  @media screen and (min-width: 1515px) {
	body {
      margin: 10px;  
	}
	
    #root {
      max-width: 1515px;
	  height: auto;
    }
	
    .App {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(6, 1fr);
      gap: 20px;
      padding: 30px;
	  height: auto;
    }

    .title_mob_box {
      display: none;
    }

    .weather-video {
	  display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }


`;

export default GlobalStyles;