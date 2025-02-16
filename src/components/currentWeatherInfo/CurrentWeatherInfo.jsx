import React from "react";
import icons from "../../icon/icon.svg";
import {CurrentWeatherInfoStyled} from "./CurrentWeatherInfoStyled";

const CurrentWeatherInfo = ({weather}) => {
	return (
		<CurrentWeatherInfoStyled>
			<div className="title">
				<svg className="title__icon">
					<use href={icons + "#umbrella"}></use>
				</svg>
				<h1 className="title__text">weather</h1>
			</div>
			<div className="current-weather-info__border">
				<div className="current-weather-info">
					<div className="current-weather-info__box">
						<div className="current-weather-info__humidity">
							<svg className="current-weather-info__icon">
								<use href={icons + "#droplet"}></use>
							</svg>
							<p className="current-weather-info__title">Вологість:</p>
							<p className="current-weather-info__value">{weather.humidity} %</p>
						</div>
						<div className="current-weather-info__cloud">
							<svg className="current-weather-info__icon">
								<use href={icons + "#cloud"}></use>
							</svg>
							<p className="current-weather-info__title">Хмарність:</p>
							<p className="current-weather-info__value">{weather.cloud} %</p>
						</div>
					</div>
					<div className="current-weather-info__wind-kph">
						<svg className="current-weather-info__icon-wind">
							<use href={icons + "#wind"}></use>
						</svg>
						<p className="current-weather-info__title">Швидкість вітру: </p>
						<p className="current-weather-info__title">{weather.wind_kph} км/хв</p>
					</div>
				</div>
			</div>
		</CurrentWeatherInfoStyled>
	);
};

export default CurrentWeatherInfo;