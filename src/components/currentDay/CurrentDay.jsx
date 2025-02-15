import React from "react";
import {CurrentDayStyled} from "./CurrentDayStyled";
import {useSelector} from "react-redux";

const CurrentDay = () => {
	const weather = useSelector((state) => state.weather.data);

	function getTimeMap(hour) {
		const currentHour = new Date().getHours();

		return {
			time: hour.toString().padStart(2, '0') + ":00",
			current: hour === currentHour
		};
	}
	return(
		<CurrentDayStyled>
			<ul>
				{weather && weather.forecast.forecastday[0].hour.map((hour, idx) => (
						<li key={hour.time_epoch} className={getTimeMap(idx).current ? "current" : ""}>
							<div>{getTimeMap(idx).time}</div>
							<div>{Math.round(hour.temp_c)} &deg;C</div>
							<img src={hour.condition.icon} alt="icon"/>
						</li>
					)
				)}
			</ul>
		</CurrentDayStyled>
	)
}

export default CurrentDay;