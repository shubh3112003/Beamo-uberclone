import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    TravelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) =>{
            state.origin = action.payloads;
        },
        setDestination: (state, action) =>{
            state.destination= action.payloads;
        },
        setTravelTimeInformation: (state, action) =>{
            state.travelTimeInformation = action.payloads;
        },
    },
});

export const { setOrigin, setDestination , setTravelTimeInformation } = navSlice.actions;

// selectors 

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;