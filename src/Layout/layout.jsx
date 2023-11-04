import Navbar from "../Components/NavBar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [openNavbar, setOpenNavbar] = useState(true);

  return (
    <>
      <div className="h-screen w-screen flex transition-all duration-150 ease-in bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400">
        <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <div
          style={{
            width:
              openNavbar && window.innerWidth > 669
                ? "calc(100vw - 150px)"
                : "100%",
          }}
          className="h-full p-4 overflow-y-auto"
        >
          <div className="border-gray-200 border dark:border-neutral-800 mt-10 rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
