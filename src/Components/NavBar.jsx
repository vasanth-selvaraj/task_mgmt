import { NavLink, useLocation } from "react-router-dom";
import DarkLogo from "../Assets/logo-dark.png";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context/ContextExport";

const Navbar = () => {
  const Location = useLocation();

  const [openNavbar, setOpenNavbar] = useState(true);

  const { theme, handleTheme } = useContext(ThemeContext);

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  console.log(window.innerWidth);
  return (
    <>
      {/* {window.innerWidth > 800 ? ( */}

      <div
        className={`h-full hidden md:flex transition-all border-r-gray-200 relative dark:border-r-neutral-800 border-r w-[150px] ease-in duration-100 ${
          openNavbar ? "ml-0" : " ml-[-150px]"
        }`}
      >
        <>
          <div
            className={`inset-0 z-20 absolute left-[100%] py-4 px-2`}
            onClick={() => handleNavbar()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-5 h-5 cursor-pointer ease-in transition-all duration-150 ${
                !openNavbar ? "rotate-0" : "rotate-180"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </>
        <div className=" h-full w-full flex flex-col gap-12">
          <div className="w-full flex mt-10 justify-center">
            {theme === "light" ? (
              <img
                className="w-[80%] cursor-pointer"
                src={DarkLogo}
                alt="p3fusion logo"
              />
            ) : (
              <img
                className="w-[80%] cursor-pointer"
                src="https://www.p3fusion.com/images/logo-white.png"
                alt="p3fusion logo"
              />
            )}
          </div>
          <div className="w-full mt-10 text-[15px] flex flex-col">
            <div className="w-full py-1 flex justify-center items-center">
              <NavLink
                to="/"
                className={`py-1 flex rounded-lg hover:bg-[rgb(57,57,43,0.08)] dark:hover:bg-[rgb-(255,255,255,0.08)] cursor-pointer w-[95%] ${
                  Location.pathname.includes("dashboard") ||
                  Location.pathname === "/"
                    ? " bg-[rgb(241,241,240)] text-[rgb(55,53,47)] dark:text-[rgba(255,255,255,0.81)] dark:bg-[rgb(44,44,44)]"
                    : ""
                }`}
              >
                <div className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div className="px-2">Dashboard</div>
              </NavLink>
            </div>
            <div className="w-full py-1 flex justify-center items-center">
              <NavLink
                to="/task-list"
                className={`py-1 flex rounded-lg hover:bg-[rgb(57,57,43,0.08)] dark:hover:bg-[rgb-(255,255,255,0.055)] cursor-pointer w-[95%] ${
                  Location.pathname.includes("list")
                    ? "bg-[rgb(241,241,240)] text-[rgb(55,53,47)] dark:text-[rgba(255,255,255,0.81)] dark:bg-[rgb(44,44,44)]"
                    : ""
                }`}
              >
                <div className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>
                </div>
                <div className="pl-2">Task List</div>
              </NavLink>
            </div>
          </div>
          <div className="w-full absolute bottom-0 flex justify-end">
            <div className="p-4 cursor-pointer" onClick={() => handleTheme()}>
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      <>
        {openNavbar && (
          <div
            className="inset-0 absolute z-10 flex md:hidden"
            onClick={() => handleNavbar()}
          ></div>
        )}
        <div
          className={`h-full fixed bg-white shadow-xl flex md:hidden rounded-tr transition-all ease-in duration-150 z-50 ${
            openNavbar ? "w-[150px]" : " w-0"
          }`}
        >
          <div
            className={`h-[90%] w-[150px] flex flex-col transition-all ease-in duration-150 justify-between ${
              !openNavbar ? "ml-0" : "ml-[-150px]"
            }`}
          >
            <>
              <div
                className={`inset-0 z-20 absolute left-[100%] top-3 py-4 px-2 transition-all duration-150`}
                onClick={() => handleNavbar()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className={`w-5 h-5 cursor-pointer  ease-in transition-all duration-150 ${
                    openNavbar ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </>
            <div className=" h-full w-full flex flex-col gap-12">
              <div className="w-full flex mt-10 justify-center">
                <img
                  className="w-[80%] cursor-pointer"
                  src={DarkLogo}
                  alt="p3fusion logo"
                />
              </div>
              <div className="w-full mt-10 text-[15px] flex flex-col">
                <div className="w-full py-1 flex justify-center items-center">
                  <NavLink
                    to="/"
                    className={`py-1 flex rounded-lg hover:bg-[rgb(57,57,43,0.08)] dark:hover:bg-[rgb-(255,255,255,0.08)] cursor-pointer w-[95%] ${
                      Location.pathname.includes("dashboard") ||
                      Location.pathname === "/"
                        ? " bg-[rgb(241,241,240)] text-[rgb(55,53,47)] dark:text-[rgba(255,255,255,0.81)] dark:bg-[rgb(44,44,44)]"
                        : ""
                    }`}
                  >
                    <div className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                    </div>
                    <div className="px-2">Dashboard</div>
                  </NavLink>
                </div>
                <div className="w-full py-1 flex justify-center items-center">
                  <NavLink
                    to="/task-list"
                    className={`py-1 flex rounded-lg hover:bg-[rgb(57,57,43,0.08)] dark:hover:bg-[rgb-(255,255,255,0.055)] cursor-pointer w-[95%] ${
                      Location.pathname.includes("list")
                        ? "bg-[rgb(241,241,240)] text-[rgb(55,53,47)] dark:text-[rgba(255,255,255,0.81)] dark:bg-[rgb(44,44,44)]"
                        : ""
                    }`}
                  >
                    <div className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                        />
                      </svg>
                    </div>
                    <div className="pl-2">Task List</div>
                  </NavLink>
                </div>
              </div>
              <div className="w-full absolute bottom-0 flex justify-end">
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => handleTheme()}
                >
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
