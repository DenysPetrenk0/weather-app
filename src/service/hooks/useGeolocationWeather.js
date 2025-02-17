import {useEffect} from "react";
import {fetchWeatherByCoords} from "../apiService";
import {setError, setWeather} from "../../store";
import {useDispatch} from "react-redux";

const useGeolocationWeather = () => {
	const dispatch = useDispatch();

	useEffect(() =>{
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const {latitude, longitude} = position.coords;
					fetchWeatherByCoords(latitude, longitude)
						.then((response) => {
							dispatch(setWeather(response.data))
						})
						.catch(() => dispatch(setError("Не вдалося знайти погоду для цього міста")))

				},
				() => dispatch(setError("Геолокацію заборонено або неможливо визначити"))
			);
		} else {
			dispatch(setError("Ваш браузер не підтримує геолокацію"))
		}
	}, [dispatch]);
};

export default useGeolocationWeather;