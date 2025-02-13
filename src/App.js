import './App.css';
import SearchBar from "./components/searchBar/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {setError, setWeather} from "./store";
import {fetchWeatherByCity, fetchWeatherByCoords} from "./service/apiService";
import ListNextDayInfo from "./components/nextDaysInfo/ListNextDayInfo";
import icons from "./icon/icon.svg"
import React, {useEffect} from "react";
import CurrentDay from "./components/currentDay/CurrentDay";
import InfoCity from "./components/infoCity/InfoCity";
import InfoTime from "./components/infoTime/InfoTime";

function App() {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.data) || {};
    const error = useSelector((state) => state.weather.error);

    const makeRequest = (city) => {
        fetchWeatherByCity(city)
            .then((response) => {
                console.log(response)
                dispatch(setWeather(response.data));
            })
            .catch(() => dispatch(setError("Не вдалося знайти погоду для цього міста")))
    }
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
        <div className="current_day_info_border">
            <div className="current_day_info">
                <div className="current_day_info_box">
                    <div className="current_day_info_humidity">
                        <svg className="current_day_info_icon" height="17" width="17">
                            <use href={icons + "#droplet"}></use>
                        </svg>
                        <p className="current_day_info_title">Вологість:</p>
                        <p className="current_day_info_value">{currentWeather.humidity} %</p>
                    </div>
                    <div className="current_day_info_cloud">
                        <svg className="current_day_info_icon" height="17" width="17">
                            <use href={icons + "#cloud"}></use>
                        </svg>
                        <p className="current_day_info_title">Хмарність:</p>
                        <p className="current_day_info_value">{currentWeather.cloud} %</p>
                    </div>
                </div>
                <div className="current_day_info_wind_kph">
                    <svg className="current_day_info_icon-wind" height="17" width="17">
                        <use href={icons + "#wind"}></use>
                    </svg>
                    <p className="current_day_info_title">Швидкість вітру: </p>
                    <p className="current_day_info_title">{currentWeather.wind_kph}</p>
                </div>
            </div>
        </div>
        <div className="title_dis_box">
            <svg className="title_dis_icon" height="70" width="70">
                <use href={icons + "#umbrella"}></use>
            </svg>
            <h1 className="title_dis">weather</h1>
        </div>
        <div className="temp_info_border">
            <div className="temp_info">
                <div className="temp_info_box">
                    {Object.keys(weather).length && <img src={currentWeather.condition.icon} alt="icon" width="120" height="120"/>}
                    <p>{currentWeather.temp_c}</p>
                </div>
                <div className="temp_info_second_box">
                    <p>Відчувається як: </p>
                    <p>{currentWeather.feelslike_c}</p>
                </div>
            </div>
        </div>
        <ListNextDayInfo />
        <CurrentDay />
        <SearchBar onSearch={makeRequest} />
        <div className="info_time">
            {error ?
                <div>введіть вірну назву міста</div> :
                <>
                    <InfoTime />
                    <InfoCity />
                </>
            }
        </div>
    </div>
  );
}

export default App;
