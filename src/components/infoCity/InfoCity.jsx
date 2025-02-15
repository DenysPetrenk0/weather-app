import React, {useMemo} from "react";
import {useSelector} from "react-redux";

const InfoCity = ()  => {

	const weather = useSelector((state) => state.weather.data);
	const memoizedWeather = useMemo(() => weather, [weather]);

	return(
		<div>
			{memoizedWeather && <p>{memoizedWeather.location.country}</p>}
			{memoizedWeather && <p>{memoizedWeather.location.tz_id}</p>}
		</div>
	)
};

export default InfoCity;