/* eslint-disable no-unused-vars */
import { ADDBOOKING, DELETEBOOKING } from "./actionsTypes";

export const addBooking = (value) => {
    return {
        type: ADDBOOKING,
        payload: value
    }
}

export const deleteBooking = (value) => {
    return {
        type: DELETEBOOKING,
        payload: value
    }
}