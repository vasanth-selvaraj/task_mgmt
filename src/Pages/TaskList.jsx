import { useContext, useEffect, useState } from "react";
import TabSwitcher from "../Components/List-TableSwitcher";
import TaskTable from "../Components/TaskTable";
import TaskCard from "../Components/TaskCard";
import { TaskListContext } from "../Context/TaskListProvider";
import Filter from "../Components/Filter";

const TaskList = () => {
  const [currentTab, setCurrentTab] = useState("cards");

  const { taskList, setTaskList } = useContext(TaskListContext);

  const [filter, setFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [sortedTaskList, setSortedTaskList] = useState([]);
  const [dynamicFunction, setDynamicFunction] = useState("");

  useEffect(() => {
    setSortedTaskList([...taskList]);
  }, [taskList]);

  function handleClearallCompletedTasks() {
    const updatedTaskList = taskList.filter(
      (task) => task.state !== "Completed"
    );
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  }

  function handleDynamicFunction() {
    let updatedTaskList = [...taskList];
    switch (dynamicFunction) {
      case "Completed":
        updatedTaskList.forEach((task) => {
          if (checkedTasks.includes(task.id)) {
            task.state = "Completed";
          }
        });
        setCheckedTasks([]);
        break;
      case "ToDo":
        updatedTaskList.forEach((task) => {
          if (checkedTasks.includes(task.id)) {
            task.state = "ToDo";
          }
        });
        setCheckedTasks([]);
        break;
      case "Active":
        updatedTaskList.forEach((task) => {
          if (checkedTasks.includes(task.id)) {
            task.state = "Active";
          }
        });
        setCheckedTasks([]);
        break;
      case "Delete":
        console.log("dee");
        updatedTaskList = updatedTaskList.filter(
          (task) => !checkedTasks.includes(task.id)
        );
        break;
      default:
        break;
    }
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex px-4">
          <h3 className="lg:text-3xl text-base font-semibold ">Tasks List</h3>
        </div>
        <div className="flex px-4 flex-col sm:flex-row mt-5 gap-3 sm:items-center z-0">
          <div className="flex gap-2">
            <TabSwitcher
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
            <Filter
              setFilter={setFilter}
              showFilters={showFilters}
              filter={filter}
              setShowFilters={setShowFilters}
              sortedTaskList={sortedTaskList}
              setSortedTaskList={setSortedTaskList}
            />
          </div>

          <div className="flex gap-4 items-center">
            {/* <span className="sm:text-sm text-xs">Shortcuts :</span> */}
            <button
              onClick={() => handleClearallCompletedTasks()}
              className="px-2 py-1 rounded sm:text-sm text-xs cursor-pointer text-white hover:bg-sky-600 font-medium bg-sky-500 transition-all duration-150 ease-linear"
            >
              Clear all completed Tasks
            </button>
            {/* <button className="px-2 py-1 rounded sm:text-sm text-xs cursor-pointer text-red-500 hover:bg-red-500 hover:text-white font-medium border border-red-500 transition-all duration-150 ease-linear">
              Delete All
            </button> */}
          </div>
        </div>

        {checkedTasks.length > 0 && (
          <div className="flex gap-2 px-4 items-center">
            <h3 className="sm:text-sm text-xs">Mark Selected to :</h3>
            <select
              onChange={(e) => setDynamicFunction(e.target.value)}
              className="col-span-4 sm:text-sm text-xs p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
            >
              <option
                value=""
                className="bg-white sm:text-sm text-xs dark:bg-neutral-800"
              >
                Select
              </option>
              <option
                value="Completed"
                className="bg-white sm:text-sm text-xs dark:bg-neutral-800"
              >
                Completed
              </option>
              <option
                value="ToDo"
                className="bg-white sm:text-sm text-xs dark:bg-neutral-800"
              >
                To Do
              </option>
              <option
                value="Active"
                className="bg-white sm:text-sm text-xs dark:bg-neutral-800"
              >
                Active
              </option>
              <option
                value="Delete"
                className="bg-white sm:text-sm text-xs dark:bg-neutral-800"
              >
                Delete
              </option>
            </select>
            <button
              onClick={() => handleDynamicFunction()}
              className="px-2 py-1 rounded sm:text-sm text-xs cursor-pointer text-sky-500 hover:bg-sky-500 hover:text-white font-medium border border-sky-500 transition-all duration-150 ease-linear"
            >
              Perform
            </button>
          </div>
        )}
        {currentTab === "cards" ? (
          <div className="flex flex-wrap gap-4 p-4">
            {filter === "Ascending" || filter === "Descending"
              ? sortedTaskList.map((task, idx) => {
                  if (task.state.includes(filter)) {
                    return (
                      <TaskCard
                        key={idx}
                        task={task}
                        fromList={true}
                        checkedTasks={checkedTasks}
                        setCheckedTasks={setCheckedTasks}
                      />
                    );
                  } else if (
                    filter === "Ascending" ||
                    filter === "Descending"
                  ) {
                    return (
                      <TaskCard
                        key={idx}
                        task={task}
                        fromList={true}
                        checkedTasks={checkedTasks}
                        setCheckedTasks={setCheckedTasks}
                      />
                    );
                  } else {
                    return <></>;
                  }
                })
              : taskList.map((task, idx) => {
                  if (task.state.includes(filter)) {
                    return (
                      <TaskCard
                        key={idx}
                        task={task}
                        fromList={true}
                        checkedTasks={checkedTasks}
                        setCheckedTasks={setCheckedTasks}
                      />
                    );
                  } else if (
                    filter === "Ascending" ||
                    filter === "Descending"
                  ) {
                    return (
                      <TaskCard
                        key={idx}
                        task={task}
                        fromList={true}
                        checkedTasks={checkedTasks}
                        setCheckedTasks={setCheckedTasks}
                      />
                    );
                  } else {
                    return <></>;
                  }
                })}
          </div>
        ) : (
          <div className="p-2 overflow-x-auto">
            <TaskTable
              taskList={
                filter === "Ascending" || filter === "Descending"
                  ? sortedTaskList
                  : taskList
              }
              filter={filter}
              checkedTasks={checkedTasks}
              setCheckedTasks={setCheckedTasks}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
