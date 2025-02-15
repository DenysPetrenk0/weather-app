import './App.css';
import SearchBar from "./components/searchBar/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {setError, setWeather} from "./store";
import {fetchWeatherByCity} from "./service/apiService";
import ListNextDayInfo from "./components/nextDaysInfo/ListNextDayInfo";
import icons from "./icon/icon.svg"
import React, {useCallback} from "react";
import CurrentDay from "./components/currentDay/CurrentDay";
import InfoTime from "./components/infoTime/InfoTime";
import useGeolocationWeather from "./service/hooks/useGeolocationWeather";
import CurrentWeatherInfo from "./components/currentWeatherInfo/CurrentWeatherInfo";
import TempInfo from "./components/tempInfo/TempInfo";

function App() {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.data) || {};

    const makeRequest = useCallback((city) => {
        fetchWeatherByCity(city)
            .then((response) => {
                dispatch(setWeather(response.data));
            })
            .catch(() => dispatch(setError("Не вдалося знайти погоду для цього міста")))
    }, [dispatch]);

    useGeolocationWeather();

    const currentWeather = weather.current || {
        feelslike_c: "",
        condition: { text: "", icon: "" },
        wind_kph: "",
        temp_c: "",
    };

  return (
    <div className="App">
        <div className="title_mob_box">
            <svg className="title_mob_icon" height="40" width="40">
                <use href={icons + "#umbrella"}></use>
            </svg>
            <h1 className="title_mob">weather</h1>
        </div>
        <SearchBar onSearch={makeRequest} />
        <ListNextDayInfo />
        <CurrentWeatherInfo weather={currentWeather}/>
        <TempInfo weather={currentWeather}/>
        <CurrentDay />
        <InfoTime />
    </div>
  );
}

export default App;
