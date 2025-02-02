import React, {useState} from "react";
import {SearchBarStyled} from "./SearchBarStyled";
import icons from "../../icon/icon.svg";

const SearchBar = ({onSearch}) => {
	const [city, setCity] = useState();

	const handleSearch = () => {
		onSearch(city)
	}

	return (
		<SearchBarStyled>
			<input type="text" placeholder="введіть місто" onChange={(event) => setCity(event.target.value)}/>
			<button type="button" className="search_bar_button" onClick={handleSearch} onKeyDown={(e) => console.log(e.key)}>
				<svg className="search_bar_button_icon" height="17" width="17">
					<use href={icons + "#search"}></use>
				</svg>
			</button>
		</SearchBarStyled>
	)
};

export default SearchBar;