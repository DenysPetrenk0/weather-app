import React, {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";

const InfoCity = ()  => {

	const weather = useSelector((state) => state.weather.data);
	const memoizedWeather = useMemo(() => weather, [weather]);

	const getCurrentDate = useCallback(() => {
		return new Intl.DateTimeFormat("uk-UA").format(new Date());
	}, []);

	return(
		<div>
			<p>{getCurrentDate()}</p>
			{memoizedWeather && <p>{memoizedWeather.location.country}</p>}
			{memoizedWeather && <p>{memoizedWeather.location.tz_id}</p>}
		</div>
	)
};

export default InfoCity;