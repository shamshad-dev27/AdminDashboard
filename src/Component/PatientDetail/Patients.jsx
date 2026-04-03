import { useEffect, useState } from "react";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import respiratory from "../../assets/respiratory.png"
import temperature from "../../assets/temperature.png"
import heart from "../../assets/HeartBPM.png"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
function Patients() {
    const [patients, setPatients] = useState([]);
    const [indexSelect, setIndexSelect] = useState(0);
    const selectedPatient = patients[indexSelect] || null;

    useEffect(() => {
        async function getPatientsData() {
            try {
                const response = await axios.get(
                    "https://fedskillstest.coalitiontechnologies.workers.dev",
                    {
                        auth: {
                            username: "coalition",
                            password: "skills-test",
                        },
                    }
                );
                setPatients(response.data); // simple ✔
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getPatientsData();
    }, []);

    const chartData = selectedPatient?.diagnosis_history
        ?.slice(0, 6) // latest 6 months
        ?.reverse()   // oldest → latest (graph ke liye)
        ?.map(item => ({
            month: item.month.slice(0, 3), // Oct, Nov
            systolic: item.blood_pressure.systolic.value,
            diastolic: item.blood_pressure.diastolic.value,
        }));


    return (
        <div className="  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-[260px_minmax(0,1fr)_320px]  gap-6  p-2  min-h-screen">
            {/* sidebar */}

            <div className="space-y-6 bg-white rounded-[16px] shadow-sm w-full px-6 h-[1030px] overflow-y-auto py-4">
                <div className="flex justify-between items-center py-2">
                    <h1 className="text-2xl font-bold">Patients</h1>
                    <FiSearch className="text-xl cursor-pointer" />
                </div>
                {patients.length > 0 ? (
                    patients.map((item, ind) => (
                        <div key={ind}
                            onClick={() => setIndexSelect(ind)}
                            className="flex items-center  space-x-2 relative  cursor-pointer  ">
                            <div className="w-[48px] h-[48px]">
                                <img src={item.profile_picture} alt="image_error" />
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold">{item.name}</h1>
                                <p className="text-xs text-gray-500">{item.gender}, <span>{item.age}</span></p>

                            </div>
                            <div className="absolute right-0 top-2">
                                <BsThreeDots className="text-xl cursor-pointer " />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>


            {/* main */}
            <div className="flex flex-col gap-6 w-full">
                {/* Diagnosis History */}

                <div className="w-full h-[673px] bg-white rounded-[16px] shadow-sm py-6 space-y-4 ">

                    <h1 className="font-bold text-lg px-6">Diagnosis History</h1>

                    <div className="bg-white rounded-2xl p-5 w-full h-[300px]">

                        <div className="flex justify-between mb-4">
                            <h2 className="font-semibold">Blood Pressure</h2>
                            <p className="text-sm text-gray-500">Last 6 months</p>
                        </div>

                        <ResponsiveContainer width="100%" height="80%">
                            <LineChart data={chartData}>

                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />

                                {/* Pink */}
                                <Line
                                    type="monotone"
                                    dataKey="systolic"
                                    stroke="#EC4899"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />

                                {/* Purple */}
                                <Line
                                    type="monotone"
                                    dataKey="diastolic"
                                    stroke="#8B5CF6"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />

                            </LineChart>
                        </ResponsiveContainer>

                    </div>

                    <div className="flex justify-around  ">
                        <div className="w-[228px] bg-[#E0F3FA] h-[242px] p-4 rounded-xl space-y-2">
                            <img src={respiratory} alt="error" />
                            <div>
                                <h2>Respiratory Rate</h2>
                                <h1 className="font-bold text-2xl">{selectedPatient?.diagnosis_history?.[0]?.respiratory_rate?.value || "N/A"} bpm</h1>
                            </div>
                            <h1>{selectedPatient?.diagnosis_history?.[0]?.respiratory_rate?.levels || "N/A"}</h1>
                        </div>


                        <div className="w-[228px] bg-[#FFE6E9] h-[242px] p-4 rounded-xl space-y-2">
                            <img src={temperature} alt="error" />
                            <div>
                                <h2>Temperature</h2>
                                <h1 className="font-bold text-2xl">{selectedPatient?.diagnosis_history?.[0]?.temperature?.value || "N/A"} bpm</h1>
                            </div>
                            <h1>{selectedPatient?.diagnosis_history?.[0]?.temperature?.levels || "N/A"}</h1>
                        </div>
                        <div className="w-[228px] bg-[#FFE6E9] h-[242px] p-4 rounded-xl space-y-2">
                            <img src={heart} alt="error" />
                            <div>
                                <h2>Heart Rate</h2>
                                <h1 className="font-bold text-2xl">{selectedPatient?.diagnosis_history?.[0]?.heart_rate?.value || "N/A"} bpm</h1>
                            </div>
                            <h1>{selectedPatient?.diagnosis_history?.[0]?.heart_rate?.levels || "N/A"}</h1>
                        </div>
                    </div>
                </div>

                {/* diagnostic list */}
                <div className="bg-white rounded-2xl p-6 shadow-sm h-">

                    {/* Title */}
                    <h1 className="text-lg font-semibold mb-4">Diagnostic List</h1>

                    {/* Header */}
                    <div className="grid grid-cols-[2fr_3fr_1fr] items-center bg-gray-100 rounded-full px-6 py-3 text-sm font-semibold text-gray-600">
                        <p>Problem/Diagnosis</p>
                        <p>Description</p>
                        <p className="text-right">Status</p>
                    </div>

                    {/* Rows */}
                    <div className="mt-4 max-h-[180px] min-h-[180px] overflow-y-scroll">

                        {selectedPatient?.diagnostic_list?.map((item, ind) => (
                            <div
                                key={ind}
                                className="grid grid-cols-[2fr_3fr_1fr] items-center px-6 py-3  text-sm"
                            >
                                <p>{item.name}</p>

                                <p className="text-gray-600">
                                    {item.description}
                                </p>

                                <p className="text-right text-gray-700">
                                    {item.status}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>

            </div>



            {/* right panel */}
            <div className="flex flex-col gap-6 w-full">
                {/* patient imformation */}
                <div className="flex flex-col space-y-5 p-6 bg-white rounded-[16px] shadow-sm w-full h-[700px] overflow-y-auto">
                    <div className="flex justify-center ">
                        <img
                            className="w-52 h-52"
                            src={selectedPatient?.profile_picture || "https://via.placeholder.com/150"}
                            alt="profile"
                        />
                    </div>
                    <div>
                        <h1 className="text-center">{selectedPatient?.name}</h1>
                    </div>
                    <div className="flex items-center space-x-3">

                        <div className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
                            <FiCalendar className="text-lg" />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Date Of Birth</p>
                            <h1 className="text-sm font-semibold">
                                {selectedPatient?.date_of_birth || "N/A"}
                            </h1>
                        </div>

                    </div>
                    <div className="flex items-center space-x-3">

                        <div className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
                            <BsGenderAmbiguous className="text-lg" />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">gender</p>
                            <h1 className="text-sm font-semibold">
                                {selectedPatient?.gender || "N/A"}
                            </h1>
                        </div>

                    </div>
                    <div className="flex items-center space-x-3">

                        <div className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
                            <FiPhone className="text-lg" />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">contact info</p>
                            <h1 className="text-sm font-semibold">
                                {selectedPatient?.phone_number || "N/A"}
                            </h1>
                        </div>

                    </div>
                    <div className="flex items-center space-x-3">

                        <div className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
                            <FiPhone className="text-lg" />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">emergency contact</p>
                            <h1 className="text-sm font-semibold">
                                {selectedPatient?.emergency_contact || "N/A"}
                            </h1>
                        </div>

                    </div>
                    <div className="flex items-center space-x-3">

                        <div className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
                            <FiShield className="text-lg" />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Insurance Provider</p>
                            <h1 className="text-sm font-semibold">
                                {selectedPatient?.insurance_type || "N/A"}
                            </h1>
                        </div>

                    </div>

                    <button className="bg-[#01F0D0] py-2 text-center rounded-full cursor-pointer">Show All Information</button>
                </div>

                {/* Lab Result */}

                <div className=" flex flex-col space-y-2 w-auto p-4 h-[296px] bg-white rounded-[16px] shadow-[0_0_1px_black] overflow-y-scroll">
                    <h1 className="text-lg font-semibold p-2">Lab Result</h1>

                    {selectedPatient?.lab_results.map((items, ind) =>
                        <div key={ind} className="flex justify-between items-center rounded-full  hover:bg-gray-100 px-4 py-2">
                            <p>{items}</p>
                            <FiDownload />
                        </div>
                    )}

                </div>
            </div>

        </div>


    );
}

export default Patients;