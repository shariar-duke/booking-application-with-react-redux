import { RiDeleteBin6Fill } from "react-icons/ri";
export default function PreviewData() {
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
                    <tr className="lws-bookedTable text-black">
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <p className="lws-bookedFrom">Dhaka</p>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className="lws-bookedTo">Sylhet</p>
                        </td>
                        <td className="flex justify-start px-6 py-4 text-center">
                            <p>11-01-23</p>
                        </td>
                        <td className="pr-14 py-4 text-center">
                            <p>2</p>
                        </td>
                        <td className="px-6 py-4">
                            <span>Business</span>
                        </td>
                        <td className="px-6 py-4">
                            <RiDeleteBin6Fill color="red" fontSize={22} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
