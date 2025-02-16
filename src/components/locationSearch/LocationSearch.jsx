import React, {useState} from "react";
import {setError} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {debounce} from "lodash";
import {LocationSearchStyled} from "./LocationSearchStyled";
import icons from "../../icon/icon.svg";

const LocationSearch = ({names, inputValue, setInputValue, onSelect, text}) => {
	const [showList, setShowList] = useState(false);
	const dispatch = useDispatch();
	const error = useSelector((state) => state.weather.error);

	const debouncedSetInput = debounce((value) => {
		setInputValue(value);

		if (!value) {
			dispatch(setError(null));
			return;
		}

		const filteredName = names.filter((country) =>
			country.toLowerCase().includes(value.toLowerCase())
		);
		dispatch(setError(filteredName.length === 0 ? `${text} не знайдено` : null))
	}, 300);

	return(
		<LocationSearchStyled>
			<div className="locations__input__box">
				<input
					type="text"
					placeholder={`Введіть ${text}`}
					className="locations__input"
					value={inputValue}
					onChange={(event) => debouncedSetInput(event.target.value)}
					onFocus={() => setShowList(true)}
				/>
				{inputValue &&
					<button type="button" className="locations__button-delete" onClick={() => setInputValue("")}>
						<svg className="locations__button-delete__icon">
							<use href={icons + "#cross"}></use>
						</svg>
					</button>
				}
			</div>
			{showList && !error && inputValue && (
				<ul className="locations__list">
					{names
						.filter((name) => name.toLowerCase().includes(inputValue.toLowerCase()))
						.slice(0, 5)
						.map((name) => (
							<li key={name}
								onClick={() => {
									onSelect(name);
									setInputValue(name);
									setShowList(false);
								}}
							>
								{name}
							</li>
						))
					}
				</ul>
			)}
		</ LocationSearchStyled>
	);
};

export default LocationSearch;