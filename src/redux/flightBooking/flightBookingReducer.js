/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { ADDBOOKING, DELETEBOOKING } from "./actionsTypes";

const initialState = [
    {
        id: 1,
        destinationForm: "Dhaka",
        destinationTo: "SaidPur",
        journeyDate: new Date(2024, 6, 5),
        numberOfGuests: 4,
        flightClass: "Business"

    }
]

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDBOOKING:
            return [
                ...state,
                action.payload
            ]
        case DELETEBOOKING:
            // eslint-disable-next-line no-case-declarations
            const newList = state.filter((flight) => flight.id != action.payload)
            return [
                ...newList
            ]
    }


}

export default flightReducer;