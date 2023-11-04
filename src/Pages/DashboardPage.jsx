import { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../Context/ContextExport";
import TaskCard from "../Components/TaskCard";
import Filter from "../Components/Filter";

const Dashboard = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState({
    completed: 0,
    Active: 0,
    Todo: 0,
  });

  const { taskList } = useContext(TaskListContext);

  useEffect(() => {
    let completed = 0;
    let Active = 0;
    let ToDo = 0;
    taskList.forEach((task) => {
      task.state === "Completed"
        ? completed++
        : task.state === "Active"
        ? Active++
        : ToDo++;
    });
    setCount((prevCount) => ({
      ...prevCount,
      completed: completed,
      Active: Active,
      Todo: ToDo,
    }));
  }, [taskList]);

  return (
    <>
      <div className="p-2 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-md border group relative border-gray-200 dark:border-neutral-800 p-1">
            <div className="text-2xl px-4 text-green-500 dark:text-green-800 font-bold">
              Completed
            </div>
            <div className="font-bold text-2xl px-4">{count.completed}</div>
            {/* <div className="absolute hidden group-hover:flex bottom-2 right-2 text-[11px] underline cursor-pointer">
              view completed
            </div> */}
          </div>
          <div className="rounded-md border group relative border-gray-200 dark:border-neutral-800 p-1">
            <div className="text-2xl px-4 text-sky-500 dark:text-sky-800 font-bold">
              Active
            </div>
            <div className="font-bold text-2xl px-4">{count.Active}</div>
            {/* <div className="absolute hidden group-hover:flex bottom-2 right-2 text-[11px] underline cursor-pointer">
              view active
            </div> */}
          </div>
          <div className="rounded-md border group relative border-gray-200 dark:border-neutral-800 p-1">
            <div className="text-2xl px-4 text-purple-500 dark:text-purple-800 font-bold">
              To Do
            </div>
            <div className="font-bold text-2xl px-4">{count.Todo}</div>
            {/* <div className="absolute hidden group-hover:flex bottom-2 right-2 text-[11px] underline cursor-pointer">
              view To Do
            </div> */}
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <h3 className="text-2xl font-bold p-1">Tasks</h3>
          <Filter
            setFilter={setFilter}
            showFilters={showFilters}
            filter={filter}
            fromDash={true}
            setShowFilters={setShowFilters}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          {taskList.map((task, idx) => {
            if (task.state.includes(filter)) {
              return <TaskCard key={idx} task={task} />;
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
