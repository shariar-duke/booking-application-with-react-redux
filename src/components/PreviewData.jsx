import { RiDeleteBin6Fill } from "react-icons/ri";
import { deleteBooking } from "../redux/flightBooking/actions"
import { useSelector, useDispatch } from "react-redux";
export default function PreviewData() {
    const flightList = useSelector((state) => state.value);
    const dispatch = useDispatch()
    console.log("Flight lists are", flightList)

    // Function to format date as dd-mm-yy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month and pad with zero if needed
        const year = date.getFullYear().toString().slice(2); // Get last two digits of the year
        return `${day}-${month}-${year}`;
    };

    // dispatching the action to delete the flight

    const deleteFlight = (id) => {

        dispatch(deleteBooking(id))
    }
    return (
        <div className="bg-white rounded-md overflow-hidden">
            <table className="w-full table-auto">
                <thead className="bg-gray-200">
                    <tr className="text-black text-left text-[18px]">
                        <th className="px-4 py-4">Destination From</th>
                        <th className="px-4 py-2">Destination To</th>
                        <th className="px-4 py-2">Journey Date</th>
                        <th className="px-4 py-2">Guests</th>
                        <th className="px-4 py-2">Class Name</th>
                        <th className="px-4 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flightList && flightList.map((singleFlightData) =>
                            <tr key={singleFlightData.id} className="lws-bookedTable text-black">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <p className="lws-bookedFrom">{singleFlightData.destinationForm
                                            ?? "-"}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="lws-bookedTo">{singleFlightData.destinationTo
                                        ?? "-"}</p>
                                </td>
                                <td className="flex justify-start px-6 py-4 text-center">
                                    <p>{formatDate(singleFlightData.journeyDate)}</p>
                                </td>
                                <td className="pr-14 py-4 text-center">
                                    <p>{singleFlightData.
                                        numberOfGuests ?? "-"
                                    }</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span>{
                                        singleFlightData.flightClass ?? "-"

                                    }</span>
                                </td>
                                <td className="px-6 py-4">
                                    <RiDeleteBin6Fill onClick={() => deleteFlight(singleFlightData.id)} className="cursor-pointer" color="red" fontSize={22} />
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
