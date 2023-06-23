import React, { useState } from "react";
import { FcSearch, FcSurvey } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, access_token } = useSelector((state) => state.authReducer);

  return (
    <nav className="w-full background__gradient flex justify-evenly items-center font-poppins">
      <div
        onClick={() => navigate("/")}
        className="flex__center text-white cursor-pointer"
      >
        <img
          src="/assets/logo.png"
          alt="logo"
          className="sm:w-[90px] w-[75px]"
        />
        <h1 className="sm:text-base text-sm font-medium">Vote Vortex</h1>
      </div>

      <div className="hidden md:flex justify-center items-center bg-white p-2 rounded-full">
        <input
          type="text"
          placeholder="Search a title"
          className="outline-0 border-0 placeholder:text-xs text-sm"
        />
        <FcSearch />
      </div>

      {access_token ? (
        <div className="hidden sm:flex justify-evenly items-center">
          <span
            className="text-sm text-white mx-2 cursor-pointer hover:opacity-80"
            onClick={() => navigate(`/profile/${user._id}`)}
          >
            {user.username}
          </span>
          <Link
            to="/create"
            className="text-sm mx-2 bg-aqua border-0 rounded-sm p-1 hover:opacity-80 active:scale-105 text-white font-semibold"
          >
            Create
          </Link>
          <FiLogOut
            color="#fff"
            className="cursor-pointer hover:opacity-80 active:scale-105 mx-2"
            onClick={() => dispatch(logout())}
          />
        </div>
      ) : (
        <div className="hidden sm:flex justify-evenly items-center">
          <Link
            to="/login"
            className="text-sm mx-2 bg-aqua border-0 rounded-sm p-1 hover:opacity-80 active:scale-105 text-white font-semibold"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-sm mx-2 bg-aqua border-0 rounded-sm p-1 hover:opacity-80 active:scale-105 text-white font-semibold"
          >
            Register
          </Link>
        </div>
      )}

      <FcSurvey
        onClick={() => setToggleMenu(true)}
        className="sm:hidden flex justify-center items-center text-white text-2xl cursor-pointer active:scale-105"
      />

      {/* RESPONSIVE */}
      {toggleMenu && (
        <div className="sm:hidden flex flex-col justify-evenly items-center fixed top-0 w-[100%] h-[100%] background__gradient z-40 section__padding flip-horizontal-bottom">
          <AiOutlineClose
            onClick={() => setToggleMenu(false)}
            className="text-white font-bold absolute top-20 right-20 text-xl cursor-pointer active:scale-105"
          />
          <div className="flex__center bg-white p-2 rounded-full">
            <input
              type="text"
              placeholder="Search a title"
              className="outline-0 border-0 placeholder:text-xs text-sm"
            />
            <FcSearch />
          </div>

          <div className="flex__col-center">
            <Link
              to="/"
              className="text-white my-2"
              onClick={() => setToggleMenu(false)}
            >
              Home
            </Link>
            <Link
              to={`/profile/${user._id}`}
              className="text-sm text-white my-2"
              onClick={() => setToggleMenu(false)}
            >
              Username
            </Link>
            <Link
              to="/create"
              className="text-sm my-2 bg-aqua border-0 rounded-sm p-1 hover:opacity-80 active:scale-105"
              onClick={() => setToggleMenu(false)}
            >
              Create
            </Link>
            <FiLogOut
              color="#fff"
              className="cursor-pointer hover:opacity-80 active:scale-105 my-2"
              onClick={() => dispatch(logout())}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
