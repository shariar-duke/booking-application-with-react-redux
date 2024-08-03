import { createStore } from "redux";
import flightReducer from "./flightBooking/flightBookingReducer";

const store = createStore(flightReducer)

export default store