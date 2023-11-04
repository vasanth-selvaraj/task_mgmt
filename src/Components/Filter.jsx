const Filter = ({
  showFilters,
  setShowFilters,
  setFilter,
  filter,
  position,
  sortedTaskList,
  setSortedTaskList,
  fromDash,
}) => {
  function sortDescending() {
    sortedTaskList.sort((taskA, taskB) => {
      const TaskAdue_date = new Date(taskA.due_date);
      const TaskBdue_date = new Date(taskB.due_date);
      return TaskBdue_date - TaskAdue_date;
    });
    setSortedTaskList([...sortedTaskList]);
  }

  function sortAscending() {
    sortedTaskList.sort((taskA, taskB) => {
      const TaskAdue_date = new Date(taskA.due_date);
      const TaskBdue_date = new Date(taskB.due_date);
      return TaskAdue_date - TaskBdue_date;
    });
    setSortedTaskList([...sortedTaskList]);
  }

  return (
    <>
      <div
        className="relative z-0 flex items-center"
        onClick={(e) => {
          e.stopPropagation();
          setShowFilters(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        {showFilters && (
          <>
            <div
              className="fixed inset-0 z-20"
              onClick={(e) => {
                e.stopPropagation();
                setShowFilters(false);
              }}
            ></div>
            <div
              className={`absolute z-50 w-32 text-sm font-medium border border-gray-200 py-1 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-800 flex flex-col ${
                position === "left" ? "right-[100%]" : "left-[100%]"
              }`}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("");

                  setShowFilters(false);
                }}
                className="hover:bg-gray-200 py-1 hover:dark:bg-neutral-900 px-2 cursor-pointer"
              >
                All
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("Completed");

                  setShowFilters(false);
                }}
                className="hover:bg-gray-200 py-1 hover:dark:bg-neutral-900 px-2 cursor-pointer"
              >
                Completed
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("Active");

                  setShowFilters(false);
                }}
                className="hover:bg-gray-200 py-1 hover:dark:bg-neutral-900 px-2 cursor-pointer"
              >
                Active
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("To Do");

                  setShowFilters(false);
                }}
                className="hover:bg-gray-200 py-1 hover:dark:bg-neutral-900 px-2 cursor-pointer"
              >
                To Do
              </div>
              {!fromDash && (
                <>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      sortDescending();
                      setFilter("Descending");
                      setShowFilters(false);
                    }}
                    className="hover:bg-gray-200 flex gap-2 items-center py-1 hover:dark:bg-neutral-900 px-2 cursor-pointer"
                  >
                    Due Date{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.9"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      sortAscending();
                      setFilter("Ascending");
                      setShowFilters(false);
                    }}
                    className="hover:bg-gray-200 flex gap-2 items-center py-1 hover:dark:bg-neutral-900 px-2 cursor-pointer"
                  >
                    Due Date{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.9"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                        />
                      </svg>
                    </span>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
      {filter !== "" && (
        <div className="flex align-middle items-center py-1 justify-center gap-2 px-3 text-sm rounded-3xl bg-gray-200 dark:bg-neutral-800">
          <div className="">{filter}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            onClick={(e) => {
              e.stopPropagation();

              setFilter("");
            }}
            className="w-4 h-4 cursor-pointer hover:text-red-500 transition-all duration-150 ease-in"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Filter;
