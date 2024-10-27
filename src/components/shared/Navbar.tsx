import { Link, NavLink } from "react-router-dom";
import Brand from "./atoms/Brand";
import { Button, buttonVariants } from "../ui/button";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setUserHasScrolled(true);
    } else {
      setUserHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed z-20 top-0 right-0 left-0 p-4",
        userHasScrolled
          ? "bg-[url('/images/hero_1.png')] bg-bottom bg-cover"
          : ""
      )}
    >
      {userHasScrolled ? (
        <div className="bg-[#00000033]  absolute top-0 right-0 bottom-0 left-0" />
      ) : null}
      <div className="w-frame relative">
        <div className="grid grid-cols-[1fr_2fr_1fr] justify-between items-center ">
          <Brand />

          <div className="grid place-content-center">
            <ul className="flex gap-[4rem] text-lg  font-semibold items-center ">
              <li className="text-white font-semibold">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-white font-semibold">
                <NavLink to={"/book-a-ride"}>Book a Ride</NavLink>
              </li>
              <li className="text-white font-semibold">
                <NavLink to={"/faq"}>FAQ</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Button variant={"outline"} className="text-white">
              (323) 943-1606
            </Button>
            <Link
              to={"/book-a-ride"}
              className={cn(
                buttonVariants({
                  className: "gap-3",
                })
              )}
            >
              <Zap />
              Book a Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
