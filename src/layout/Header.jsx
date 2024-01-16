import { Link } from "react-router-dom";
import { WiDayCloudyWindy } from "react-icons/wi";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import { useThemeContext } from "../ThemeContext";

function Header() {
  const { toggleDark } = useThemeContext();
  return (
    <>
      <nav className="flex  items-center justify-between bg-rose-100  rounded m-2 md:m-8 sticky top-0 ">
        <Link to="/" className="flex m-2 ">
          <WiDayCloudyWindy className=" font-bold text-2xl md:text-5xl bg-rose-300 rounded md:m-4" />
          <span className=" text-sm  md:text-xl font-bold flex flex-col align-middle justify-center items-center pl-1 ">
            <span className=" text-[0.8rem]">Weather</span>
            <span className=" text-[0.8rem]">App</span>
          </span>
        </Link>

        <span className="flex gap-4 pr-4">
          <button onClick={toggleDark}>
            <WiMoonAltWaningCrescent1 className=" w-auto text-xl md:text-4xl  font-bold bg-rose-300 rounded " />
          </button>
          <Link
            className="text-sm font-bold  md:text-xl bg-rose-300 p-2 rounded hover:bg-rose-200 md:m-4 items-center"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-bold md:text-xl bg-rose-300 p-2 rounded hover:bg-rose-200 md:m-4"
            to="/search"
          >
            Seach Weather
          </Link>
        </span>
      </nav>
    </>
  );
}
export default Header;
