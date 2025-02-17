import SearchBar from "./components/searchBar/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {setError, setWeather} from "./store";
import {fetchWeatherByCity} from "./service/apiService";
import ListNextDayInfo from "./components/nextDaysInfo/ListNextDayInfo";
import icons from "./icon/icon.svg"
import React, {useCallback, useEffect, useRef} from "react";
import CurrentDay from "./components/currentDay/CurrentDay";
import InfoTime from "./components/infoTime/InfoTime";
import useGeolocationWeather from "./service/hooks/useGeolocationWeather";
import CurrentWeatherInfo from "./components/currentWeatherInfo/CurrentWeatherInfo";
import TempInfo from "./components/tempInfo/TempInfo";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import useWeatherTheme from "./service/hooks/useWeatherTheme";

function App() {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.data) || {};
    const videoRef = useRef(null);

    const makeRequest = useCallback((city) => {
        if (!city || city.trim() === "") {
            dispatch(setError("Введіть назву міста"));
            return;
        }

        fetchWeatherByCity(city)
            .then((response) => {
                if (response.data) {
                    dispatch(setWeather(response.data));
                } else {
                    dispatch(setError("Данні не знайдені"))
                }
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

    const {theme, video} = useWeatherTheme(currentWeather.condition?.code);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [video]);

  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <div className="App">
              <video ref={videoRef} className="weather-video" autoPlay loop muted>
                  <source src={video} type="video/mp4"/>
              </video>
              <div className="title_mob_box">
                  <svg className="title_mob_icon">
                      <use href={icons + "#umbrella"}></use>
                  </svg>
                  <h1 className="title_mob">weather</h1>
              </div>
              <SearchBar onSearch={makeRequest}/>
              <ListNextDayInfo />
              <CurrentWeatherInfo weather={currentWeather}/>
              <TempInfo weather={currentWeather}/>
              <CurrentDay />
              <InfoTime />
          </div>
      </ThemeProvider>
  );
}

export default App;
