import framImg from "../assets/Frame.svg";
import guestIcon from "../assets/guestIcon.svg";
import flightClass from "../assets/flightClass.svg"
import { FaPlus } from "react-icons/fa";
export default function InputData() {
    return (
        <div className="relative ">
            <div >
                <form className="first-hero lws-inputform">
                    <div className="bg-white  rounded-md flex gap-[20px] p-[20px] ">
                        {/* Destination From  */}
                        <div className="border-r border-2px border-gray-400 pr-[30px]" >
                            <p className="text-[18px] text-gray-400">Destination From</p>
                            <div className="mt-[8px] flex gap-[0px]  items-center ">
                                <img src={framImg} className="h-[30px]" alt="" />
                                <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                    <option value="" hidden>Please Select</option>
                                    <option>Dhaka</option>
                                    <option>Sylhet</option>
                                    <option>Saidpur</option>
                                    <option>Coxs Bazar</option>
                                </select>
                            </div>
                        </div>
                        {/* Destination To  */}
                        <div className="border-r border-2px border-gray-400 pr-[30px]" >
                            <p className="text-[18px] text-gray-400">Destination To</p>
                            <div className="mt-[8px] flex gap-[0px]  items-center">
                                <img src={framImg} className="h-[30px]" alt="" />
                                <select className="outline-none px-4 py-2 w-full" name="from" required>
                                    <option value="" hidden>Please Select</option>
                                    <option>Dhaka</option>
                                    <option>Sylhet</option>
                                    <option>Saidpur</option>
                                    <option>Coxs Bazar</option>
                                </select>
                            </div>
                        </div>
                        <div className="border-r border-2px border-gray-400 pr-[30px]" >
                            <p className="text-[18px] text-gray-400">Journey Date</p>
                            <input type="date" className="outline-none px-2 py-2 mt-[6px] w-full date" name="date" required />
                        </div>
                        <div className="border-r border-2px border-gray-400 pr-[30px]" >
                            <p className="text-[18px] text-gray-400">Guests</p>
                            <div className="mt-[8px] flex gap-[0px]  items-center">
                                <img src={guestIcon} className="h-[26px]" alt="" />
                                <select className="outline-none px-2 py-2 w-full" name="from" required>
                                    <option value="" hidden>Please Select</option>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Persons</option>
                                    <option value="3">3 Persons</option>
                                    <option value="4">4 Persons</option>
                                </select>
                            </div>
                        </div>
                        <div className="pr-[30px]" >
                            <p className="text-[18px] text-gray-400">Class</p>
                            <div className="mt-[8px] flex gap-[0px]  items-center">
                                <img src={flightClass} className="h-[26px]" alt="" />
                                <select className="outline-none px-2 py-2 w-full" name="from" required>
                                    <option value="" hidden>Please Select</option>
                                    <option>Business</option>
                                    <option>Economy</option>
                                </select>
                            </div>
                        </div>

                        <div className=" flex justify-center items-center" >
                            <button className="border border-purple-400 px-4 py-2 rounded-md text-purple-700 font-bold text-[18px] flex gap-[6px] items-center">
                                <FaPlus fontSize={14} />
                                <p>Book</p>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
