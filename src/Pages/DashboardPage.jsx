import { useState } from "react";

const Dashboard = () => {
  const [showFilters, setShowFilters] = useState(false);

  console.log(showFilters);
  return (
    <>
      <div className="p-2 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-md border group relative border-gray-200 dark:border-neutral-800 p-1">
            <div className="text-2xl px-4 text-green-500 dark:text-green-800 font-bold">
              Completed
            </div>
            <div className="font-bold text-2xl px-4">7</div>
            <div className="absolute hidden group-hover:flex bottom-2 right-2 text-[11px] underline cursor-pointer">
              view completed
            </div>
          </div>
          <div className="rounded-md border group relative border-gray-200 dark:border-neutral-800 p-1">
            <div className="text-2xl px-4 text-sky-500 dark:text-sky-800 font-bold">
              Active
            </div>
            <div className="font-bold text-2xl px-4">10</div>
            <div className="absolute hidden group-hover:flex bottom-2 right-2 text-[11px] underline cursor-pointer">
              view active
            </div>
          </div>
          <div className="rounded-md border group relative border-gray-200 dark:border-neutral-800 p-1">
            <div className="text-2xl px-4 text-amber-500 dark:text-amber-800 font-bold">
              Not Started
            </div>
            <div className="font-bold text-2xl px-4">2</div>
            <div className="absolute hidden group-hover:flex bottom-2 right-2 text-[11px] underline cursor-pointer">
              view unstarted
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <h3 className="text-2xl font-bold p-1">Tasks</h3>
          <div
            className="relative z-0"
            onClick={(e) => {
              e.stopPropagation();
              setShowFilters(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            {showFilters && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowFilters(false);
                  }}
                ></div>
                <div className="absolute z-50 left-[100%] p-2 w-32 border border-gray-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-800 flex flex-col">
                  <div>All</div>
                  <div>Completed</div>
                  <div>Active</div>
                  <div>Not Started</div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="w-60 h-20 rounded border border-gray-200 dark:border-neutral-800 p-2"></div>
          <div className="w-60 h-20 rounded border border-gray-200 dark:border-neutral-800 p-2"></div>
          <div className="w-60 h-20 rounded border border-gray-200 dark:border-neutral-800 p-2"></div>
          <div className="w-60 h-20 rounded border border-gray-200 dark:border-neutral-800 p-2"></div>
          <div className="w-60 h-20 rounded border border-gray-200 dark:border-neutral-800 p-2"></div>
          <div className="w-60 h-20 rounded border border-gray-200 dark:border-neutral-800 p-2"></div>
          <div className="w-60 h-20 rounded border border-gray-200 dark:border-neutral-800 p-2"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
