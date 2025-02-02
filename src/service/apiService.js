import axios from "axios";

const API_KEY = "ed9e305d4c9a4065a72103952252901";
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?";

export const  fetchWeatherByCity = async (city) => {
	return await axios.get(
	`${BASE_URL}key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
	);
};

export const fetchWeatherByCoords = async (lat, lon) => {
	return await axios.get(
		`${BASE_URL}key=${API_KEY}&q=${lat},${lon}&lang=uk&days=7`
	);
};