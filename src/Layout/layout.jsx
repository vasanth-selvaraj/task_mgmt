import Navbar from "../Components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen w-screen transition-all duration-150 ease-in bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-200">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
