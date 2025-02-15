import React, {useEffect, useMemo, useState} from "react";
import {InfoTimeStyled} from "./InfoTimeStyled";

const InfoTime = () => {
   const [time, setTime] = useState(new Date());

	const getCurrentDate = useMemo(() => {
		return new Intl.DateTimeFormat("uk-UA").format(new Date());
	}, []);

	useEffect(() => {
		const timerID = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timerID);
	}, []);

	return(
		<InfoTimeStyled>
			<p>{getCurrentDate}</p>
			<p>{time.toLocaleTimeString()}</p>
		</InfoTimeStyled>
	)
}

export default InfoTime;