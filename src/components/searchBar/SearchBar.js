import React, {useEffect, useState} from "react";
import {SearchBarStyled} from "./SearchBarStyled";
import icons from "../../icon/icon.svg";
import {useDispatch} from "react-redux";
import {fetchCities, fetchCountries} from "../../service/apiService";
import {setError} from "../../store";

const SearchBar = ({onSearch}) => {
	const [cities, setCities] = useState([]);
	const [cityInput, setCityInput] = useState("");
	const [countries, setCountries] = useState([]);
	const [countryInput, setCountryInput] = useState("");
	const [selectedCountry, setSelectedCountry] = useState(null);
	const dispatch = useDispatch();

	const handleSearch = (city) => {
		setCityInput(city);
		onSearch(city)
	}

	useEffect(() => {
		fetchCountries()
			.then((response) => {
				const countriesName = response.data.map((country) => country.name.common);
				setCountries(countriesName.sort());
			})
			.catch(() => dispatch(setError("Не вдалося отримати список країн")));
	}, [dispatch]);

	useEffect(() => {
		if (selectedCountry) {
			fetchCities(selectedCountry)
				.then((response) => {
					setCities(response.data.data.sort())
				})
				.catch(() => dispatch(setError("Не вдалося отримати список міст")))
		}
	}, [selectedCountry, dispatch]);

	return (
		<SearchBarStyled>
			<input
				type="text"
				placeholder="Введіть країну"
				className="countries__input"
				value={countryInput}
				onChange={(e) => setCountryInput(e.target.value)}
			/>
			{!selectedCountry && countryInput && (
				<ul className="countries__list">
					{countries
						.filter((country) => country.toLowerCase().includes(countryInput.toLowerCase()))
						.slice(0, 5)
						.map((country) => (
							<li key={country} onClick={() => {setCountryInput(country); setSelectedCountry(country)}}>
								{country}
							</li>
						))
					}
				</ul>
			)}
			{selectedCountry &&
				<>
					<input
						type="text"
						placeholder="Введіть місто"
						className="cities__input"
						value={cityInput}
						onChange={(e) => setCityInput(e.target.value)}
					/>
					{selectedCountry && (
						<ul className="cities__list">
							{cities
								.filter((city) => city.toLowerCase().includes(cityInput.toLowerCase()))
								.slice(0, 5)
								.map((city) => (
									<li key={city} onClick={() => handleSearch(city)}>
										{city}
									</li>
								))
							}
						</ul>
					)}
				</>
			}
			{/*<input type="text" placeholder="Введіть країну" onChange={(event) => setCity(event.target.value)}/>*/}
			{/*<button type="button" className="search_bar_button" onClick={handleSearch} onKeyDown={(e) => console.log(e.key)}>*/}
			{/*	<svg className="search_bar_button_icon" height="17" width="17">*/}
			{/*		<use href={icons + "#search"}></use>*/}
			{/*	</svg>*/}
			{/*</button>*/}
		</SearchBarStyled>
	)
};

export default SearchBar;