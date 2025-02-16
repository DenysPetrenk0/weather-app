import React, {useState} from "react";
import {SearchBarStyled} from "./SearchBarStyled";
import {useSelector} from "react-redux";
import {useCities, useCountries} from "../../service/hooks/useLocations";
import LocationSearch from "../locationSearch/LocationSearch";
import InfoCity from "../infoCity/InfoCity";


const SearchBar = ({onSearch}) => {
	const [citiSelected, setCitiSelected] = useState("");
	const [countrySelected, setCountrySelected] = useState("");
	const [tempCountry, setTempCountry] = useState("");
	const error = useSelector((state) => state.weather.error);

	const countries = useCountries();
	const cities = useCities(countrySelected);

	// useEffect(() => {
	// 	if (!citiSelected || citiSelected.length < 2) return;
	// 	onSearch(citiSelected)
	// }, [citiSelected, onSearch]);
	return (
		<SearchBarStyled>
			<LocationSearch
				names={countries}
				text="Країну"
				inputValue={tempCountry}
				setInputValue={setTempCountry}
				onSelect={(country) => {
					setCountrySelected(country);
					setTempCountry(country);
				}}
			/>
			{tempCountry && countrySelected && (
				<LocationSearch
					names={cities}
					text = "Місто"
					inputValue={citiSelected}
					setInputValue={setCitiSelected}
					onSelect={(citi) => {
						setCitiSelected(citi);
						onSearch(citi);
					}}
				/>
			)}
			<div className="info_error">
				{error ? <div>{error}</div> : <InfoCity />}
			</div>
		</SearchBarStyled>
	)
};

export default SearchBar;