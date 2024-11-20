import { BsCursor } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { GoNorthStar } from "react-icons/go";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosColorPalette } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Profile from "../assets/profile-pic.png"

const navigation = [
  { name: "Comet", link: "/" },
  { name: "Upgrade", link: "/Manifesto" },
  { name: "Home", Link: "/" },
  { name: "Discover", link: "/Discover" },
];

export default function SecondNav() {
  return (
    <div className="w-full flex justify-between items-center py-5">
      <ul className="flex gap-6 text-xl">
        {navigation.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex items-center gap-x-2 text-white text-base"
          >
            {index === 0 ? (
              <>
                <GoNorthStar />
                {item.name}
              </>
            ) : (
              item.name
            )}
          </Link>
        ))}
      </ul>
      <div className="absolute left-[50%]  translate-x-[-50%] items-center mt-5">
        <div className="w-[400px] relative">
          <input
            type="search"
            placeholder="Search comet"
            className="p-2 px-4 text-sm rounded-2xl bg-[#2a2a2a] text-white w-full"
          />
          <IoIosColorPalette className="absolute  bottom-[30%] right-4 text-gray-700" />
        </div>
      </div>
      <ul className="flex items-center gap-x-4 text-gray-400">
      <li className="cursor-pointer">
        <FiPlus size={20} />
      </li>
      <li className="cursor-pointer">
        <BsCursor size={20} className="-rotate-90" />
      </li>
      <li className="cursor-pointer">
        <HiOutlineAdjustmentsHorizontal size={20} />
      </li>
      <li className="cursor-pointer">
        <CiBellOn size={20} />
      </li>
      <li className="cursor-pointer">

            <div className="flex items-center gap-x-1 cursor-pointer">
              <img src={Profile} alt="profile-pic" /> <MdKeyboardArrowDown />
            </div>

      </li>
    </ul>
    </div>
  );
}
