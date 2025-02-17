import {useEffect, useMemo, useState} from "react";
import {cloudsFogRainThunder, defaultTheme, snowTheme, sunnyTheme} from "../../styles/themes/themes";
import {themesVideo} from "../constants/themesVideo";
import {weatherCode} from "../constants/weatherCodes";

const useWeatherTheme = (weatherCondition) => {
	const [theme, setTheme] = useState(defaultTheme);
	const [video, setVideo] = useState(themesVideo.defaultTheme);

	const selectedTheme = useMemo(() => {
		if (!weatherCondition) return defaultTheme;
		if (weatherCode.cloudy.includes(weatherCondition)) return cloudsFogRainThunder;
		if (weatherCode.rain.includes(weatherCondition)) return cloudsFogRainThunder;
		if (weatherCode.thunder.includes(weatherCondition)) return cloudsFogRainThunder;
		if (weatherCode.snow.includes(weatherCondition)) return snowTheme;
		if (weatherCode.fog.includes(weatherCondition)) return cloudsFogRainThunder;
		if (weatherCode.sunny.includes(weatherCondition)) return sunnyTheme;
		return defaultTheme;
	}, [weatherCondition]);

	const selectedVideo = useMemo(() => {
		if (!weatherCondition) return themesVideo.defaultTheme;
		if (weatherCode.cloudy.includes(weatherCondition)) return themesVideo.cloud;
		if (weatherCode.rain.includes(weatherCondition)) return themesVideo.rain;
		if (weatherCode.thunder.includes(weatherCondition)) return themesVideo.thunder;
		if (weatherCode.snow.includes(weatherCondition)) return themesVideo.snow;
		if (weatherCode.fog.includes(weatherCondition)) return themesVideo.fog;
		if (weatherCode.sunny.includes(weatherCondition)) return themesVideo.sunny;
		return themesVideo.defaultTheme;
	}, [weatherCondition]);

	useEffect(() => {
		setTheme(selectedTheme);
		setVideo(selectedVideo);
	}, [selectedTheme, selectedVideo]);

	return {theme, video}
};

export default useWeatherTheme;