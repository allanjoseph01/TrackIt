import React, { useContext, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { UserContext } from "../../context/userContext";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between bg-slate-900/90 backdrop-blur-md border-b border-slate-700 px-6 py-4 sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <button
            className="block lg:hidden text-slate-200"
            onClick={() => setOpenSideMenu(!openSideMenu)}
          >
            {openSideMenu ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>

          <h2
            className="text-lg font-semibold text-white tracking-wide cursor-pointer"
            onClick={() => navigate("/")}
          >
            Track<span className="text-blue-500">It</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src={user.profileImageUrl}
                alt="profile"
                className="w-9 h-9 rounded-full border border-slate-700 object-cover"
              />
              <div className="hidden sm:block">
                <p className="text-sm text-slate-200 leading-tight">
                  {user.name}
                </p>
                <p className="text-xs text-slate-400">
                  {user.role === "admin" ? "Admin" : "User"}
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-500 transition text-white"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {openSideMenu && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden">
          <div className="fixed top-[61px] left-0">
            <SideMenu activeMenu={activeMenu} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
