import React from "react";
import {ListNextDayInfoStyled} from "./ListNextDayInfoStyled";
import ItemNextDayInfo from "./itemNextDay/ItemNextDayInfo";
import {useSelector} from "react-redux";

const ListNextDayInfo = () => {
	const weather = useSelector(state => state.weather.data);

	return(
		<ListNextDayInfoStyled>
			<ul>
				{weather && (weather.forecast.forecastday.map((forecastday) => (
					<ItemNextDayInfo key={forecastday.date} forecastday={forecastday} />
				)))}
			</ul>
		</ListNextDayInfoStyled>
	)
};

export default ListNextDayInfo;