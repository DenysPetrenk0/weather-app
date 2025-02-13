import axios from "axios";

const API_KEY = "ed9e305d4c9a4065a72103952252901";
const BASE_URL_WEATHER = "https://api.weatherapi.com/v1/forecast.json?";
const BASE_URL_COUNTRIES = "https://restcountries.com/v3.1/all";
const BASE_URL_CITIES = "https://countriesnow.space/api/v0.1/countries/cities";

export const  fetchWeatherByCity = async (city) => {
	console.log(city)
	return await axios.get(
	`${BASE_URL_WEATHER}key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
	);
};

export const fetchWeatherByCoords = async (lat, lon) => {
	return await axios.get(
		`${BASE_URL_WEATHER}key=${API_KEY}&q=${lat},${lon}&lang=uk&days=7`
	);
};

export const fetchCountries = async () => {
	return await axios.get(BASE_URL_COUNTRIES);
};

export const fetchCities = async (country) => {
	return await axios.post(BASE_URL_CITIES, {country: country});
}