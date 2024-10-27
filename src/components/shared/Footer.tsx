import { Link } from "react-router-dom";
import Brand from "./atoms/Brand";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-black text-white p-[3rem]">
      <div className="w-frame flex flex-col gap-[3rem] justify-center items-center">
        <Brand />
        <ul className="flex gap-[4rem] text-base items-center ">
          <li className="text-white font-semibold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-white font-semibold">
            <Link to={"/book-a-ride"}>Book a Ride</Link>
          </li>
          <li className="text-white font-semibold">
            <Link to={"/faq"}>FAQ</Link>
          </li>
          <li className="text-white font-semibold">
            <Link to={"/faq"}>Privacy Policy</Link>
          </li>
        </ul>
        <hr className="w-full border-gray-700" />
        <div className="flex  w-full justify-between items-center">
          <p className="text-base">© 2023 SMHP. All rights reserved</p>

          <div className="flex items-center gap-[2rem]">
            <Link to={""} className="flex p-4 rounded-full bg-gray-800">
              <FaInstagram size={22} />
            </Link>
            <Link to={""} className="flex p-4 rounded-full bg-gray-800">
              <BsTwitterX  size={22} />
            </Link>
            <Link to={""} className="flex p-4 rounded-full bg-gray-800">
              <TbBrandYoutube size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
