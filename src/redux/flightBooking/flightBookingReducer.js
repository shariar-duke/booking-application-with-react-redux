/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { ADDBOOKING, DELETEBOOKING } from "./actionsTypes";

const initialState = {
    value: [
        {
            id: 1,
            destinationForm: "Dhaka",
            destinationTo: "SaidPur",
            journeyDate: new Date(2024, 6, 5),
            numberOfGuests: 4,
            flightClass: "Business"
        }
    ]
}

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDBOOKING:

            if (state.value.length >= 3) {
                return state
            }
            else {
                return {
                    ...state,
                    value: [
                        ...state.value,
                        action.payload
                    ]
                };
            }


        case DELETEBOOKING:
            return {
                ...state,
                value: state.value.filter(flight => flight.id !== action.payload)
            };
        default:
            return state;
    }


}

export default flightReducer;