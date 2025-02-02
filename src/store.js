import {configureStore, createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		data: null,
		error: null
	},
	reducers: {
		setWeather(state, action) {
			state.data = action.payload;
			state.error = null;
		},

		setError(state, action) {
			state.error = action.payload;
			state.data = null;
		},
	}
});

export const {setWeather, setError} = weatherSlice.actions;

const store = configureStore({
	reducer: {
		weather: weatherSlice.reducer
	}
});

export default store;