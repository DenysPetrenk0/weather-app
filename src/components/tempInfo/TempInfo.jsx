import React from "react";
import {TempInfoStyled} from "./TempInfoStyled";

const TempInfo = ({weather}) => {
	return (
		<TempInfoStyled>
			<div className="temp_info">
				<div className="temp_info__box">
					{weather.condition.icon &&
						(<img src={weather.condition.icon} alt="icon" width="120" height="120"/>)}
					<p>{Math.round(weather.temp_c)}</p>
					<p>&deg;C</p>
				</div>
				<div className="temp_info__second_box">
					<p>Відчувається як: </p>
					<p>{Math.round(weather.feelslike_c)} &deg;C</p>
				</div>
			</div>
		</TempInfoStyled>
	);
};

export default TempInfo;