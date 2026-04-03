import { NavLink } from "react-router-dom";
import logo from "../assets/TestLogo@2x.jpg"
import profile from "../assets/senior.png"
import { FiHome, FiCalendar, FiMessageSquare, FiMenu } from "react-icons/fi";
import { FaUserInjured } from "react-icons/fa";
import { HiOutlineCreditCard } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

function AdminNavbar() {
  const [hid, setHid] = useState(false);
  function changeWidth() {
    const drawerSide = document.getElementsByClassName('drawer-side');
    drawerSide[0].style.width = 'auto';
    setHid(true)
  }
  function hideDrawer() {
    const element = document.getElementsByClassName('drawer-toggle');
    element[0].checked = false;
    const drawerSide = document.getElementsByClassName('drawer-side');
    drawerSide[0].style.width = '0';
    setHid(false)
  }
  return (
    <div>

      {/* sideDrawer */}

      <div className="lg:hidden drawer absolute right-8 top-9 z-50 w-fit">
        <input type="checkbox" id="my-drawer" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className={`font-bold text-black ${hid ? "hidden" : "block"}`}
            />
          </label>
        </div>
        <div className="drawer-side w-0 ">
          <ul className=" p-4 mb-4 space-y-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer} className="text-black-200">
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                    ? "bg-teal-500 text-white"
                    : "text-gray-500 hover:bg-teal-300"
                  }`
                }
              >
                <FiHome />
                <span>Overview</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                    ? "bg-teal-500 text-white font-semibold"
                    : "text-gray-500 hover:bg-teal-300"
                  }`
                }
              >
                <FaUserInjured />
                <span>Patients</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/schedule"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                    ? "bg-teal-500 text-white"
                    : "text-gray-500 hover:bg-teal-300"
                  }`
                }
              >
                <FiCalendar />
                <span>Schedule</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/message"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                    ? "bg-teal-500 text-white"
                    : "text-gray-500 hover:bg-teal-300"
                  }`
                }
              >
                <FiMessageSquare />
                <span>Message</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transaction"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                    ? "bg-teal-500 text-white"
                    : "text-gray-500 hover:bg-teal-300"
                  }`
                }
              >
                <HiOutlineCreditCard />
                <span>transaction</span>
              </NavLink>
            </li>
            <li className="absolute bottom-0 pb-4">
              <div className="flex items-center space-x-2 bg-white ">
                {/* Left side (profile + text) */}
                <div className="flex items-center space-x-3">
                  <img src={profile} alt="profile" className="w-10 h-10 rounded-full object-cover" />

                  <div className="flex flex-col">
                    <h1 className="text-sm font-semibold">Dr. Jose Simmons</h1>
                    <p className="text-xs text-gray-500">General Practitioner</p>
                  </div>
                </div>

                {/* Right side (icons) */}
                <div className="flex items-center space-x-1 text-gray-500 ">
                  <FiSettings className="text-xl cursor-pointer hover:text-black" />
                  <BsThreeDotsVertical className="text-xl cursor-pointer hover:text-black" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* navbar  */}
      <nav className={`${hid ? "hidden" : "block"} flex  justify-between px-5 items-center absolute top-[18px]  w-[100%] h-[70px] bg-white rounded-[70px] shadow-[0_0_1px_black] space-x-4`}>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-12 md:w-52 md:h-14 object-contain" />
        </div>
        <div className="hidden lg:flex items-center space-x-4 text-gray-500">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                ? "bg-teal-500 text-white"
                : "text-gray-500 hover:bg-teal-300"
              }`
            }
          >
            <FiHome />
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                ? "bg-teal-500 text-white font-semibold"
                : "text-gray-500 hover:bg-teal-300"
              }`
            }
          >
            <FaUserInjured />
            <span>Patients</span>
          </NavLink>

          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                ? "bg-teal-500 text-white"
                : "text-gray-500 hover:bg-teal-300"
              }`
            }
          >
            <FiCalendar />
            <span>Schedule</span>
          </NavLink>

          <NavLink
            to="/message"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                ? "bg-teal-500 text-white"
                : "text-gray-500 hover:bg-teal-300"
              }`
            }
          >
            <FiMessageSquare />
            <span>Message</span>
          </NavLink>

          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive
                ? "bg-teal-500 text-white"
                : "text-gray-500 hover:bg-teal-300"
              }`
            }
          >
            <HiOutlineCreditCard />
            <span>Transactions</span>
          </NavLink>


        </div>

        <div className=" hidden lg:flex items-center space-x-2">
          {/* Left side (profile + text) */}
          <div className="flex items-center space-x-3">
            <img src={profile} alt="profile" className="w-10 h-10 rounded-full object-cover" />

            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Dr. Jose Simmons</h1>
              <p className="text-xs text-gray-500">General Practitioner</p>
            </div>
          </div>

          {/* Right side (icons) */}
          <div className="flex items-center space-x-1 text-gray-500">
            <FiSettings className="text-xl cursor-pointer hover:text-black" />
            <BsThreeDotsVertical className="text-xl cursor-pointer hover:text-black" />
          </div>
        </div>
      </nav>

    </div>
  );
}

export default AdminNavbar;