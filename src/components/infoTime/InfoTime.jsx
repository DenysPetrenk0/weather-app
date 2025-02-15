import React from "react";

class InfoTime extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		}
	}

	getCurrentDate() {
		return new Intl.DateTimeFormat("uk-UA").format(new Date());
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return(
			<>
				<p>{this.getCurrentDate()}</p>
				<p>{this.state.date.toLocaleTimeString()}</p>
			</>
		)
	}
}

export default InfoTime;