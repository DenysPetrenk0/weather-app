import {fetchCities, fetchCountries} from "../apiService";
import {setError} from "../../store";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export const useCountries = () => {
	const dispatch = useDispatch();
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetchCountries()
			.then((response) => {
				const countriesName = response.data.map((country) => country.name.common);
				setCountries(countriesName.sort());
			})
			.catch(() => dispatch(setError("Не вдалося отримати список країн")));
	}, [dispatch]);

	return countries;
};

export const useCities = (selectedCountry) => {
	const dispatch = useDispatch();
	const [cities, setCities] = useState([]);

	useEffect(() => {
		if (selectedCountry) {
			fetchCities(selectedCountry)
				.then((response) => {
					setCities(response.data.data.sort())
				})
				.catch(() => dispatch(setError("Не вдалося отримати список міст")))
		} else {
			setCities([]);
		}
	}, [selectedCountry, dispatch]);

	return cities;
};