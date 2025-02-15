import styled from "styled-components";

const sizes = {
	desktop: "1515px",
	tablet: "1024px",
	mobile: "580px",
};

const device = {
	desktop: `@media (min-width: ${sizes.desktop})`,
	tablet: `@media (max-width: ${sizes.desktop}) and (min-width: ${sizes.tablet})`,
	mobile: `@media (max-width: ${sizes.mobile})`,
};

export const CurrentDayStyled = styled.div`
  display: none;

  ${device.desktop} {
	display: block;
    grid-column: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 5;
    background: linear-gradient(107deg, rgba(34,135,203,255) 0%, rgba(70,165,222,255) 100%);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 20px;
    position: relative;
    width: 100%;
    height: 170%;

    ul {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      background: linear-gradient(107deg, rgba(22,157,239,255) 0%, rgba(85,186,238,255) 100%);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      padding: 20px;
      display: flex;
      width: 98%;
      height: 87%;
    }

    li {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 1px;

      &:not(:last-child) {
        border-right: 1px solid rgb(139 186 210);
      }
    }

    .current {
      background: white;
      color: rgba(85,186,238,255);
      scale: 1.3;
      border-radius: 10px;
	  padding: 5px;
    }
  }
`;