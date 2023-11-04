import { useContext, useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { TaskListContext } from "../Context/TaskListProvider";

const Task = () => {
  const Location = useLocation();
  const history = useNavigate();
  const { id } = useParams();
  const { taskList, setTaskList } = useContext(TaskListContext);

  const [task, setTask] = useState({});

  useEffect(() => {
    if (Location.pathname.includes("new-task")) {
      setTask({
        id: id,
        task_name: "",
        description: "",
        due_date: "",
        comment: "",
        comments: [],
        state: "",
        completed_date: "",
      });
    } else {
      taskList.forEach((task) => {
        task.id === id && setTask(task);
      });
    }
  }, [Location, id, taskList]);

  const handleSaveTask = (e) => {
    setTaskList([...taskList, task]);
    localStorage.setItem("taskList", JSON.stringify([...taskList, task]));
    setTask({});
    history(`/task/${id}`);
  };

  return (
    <>
      <div className="p-4 flex gap-4">
        <div className="w-1/2">
          <h3 className="text-3xl font-semibold">New Task</h3>
          <form className="w-full mt-5 gap-4 flex flex-col">
            <div className="grid grid-cols-7 items-center">
              <label className="col-span-2">Id</label>
              <div>:</div>
              <input
                value={task.id}
                disabled
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            <div className="grid grid-cols-7 items-center">
              <label className="col-span-2">Task</label>
              <div>:</div>
              <input
                value={task.description}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    name: e.target.value,
                  }))
                }
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            <div className="grid grid-cols-7 items-center">
              <label className="col-span-2">Description</label>
              <div>:</div>
              <textarea
                value={task.description}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    description: e.target.value,
                  }))
                }
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            <div className="grid grid-cols-7 items-center">
              <label className="col-span-2">Comments</label>
              <div>:</div>
              <textarea
                value={task.comments}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    comments: e.target.value,
                  }))
                }
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            <div className="grid grid-cols-7 items-center">
              <label className="col-span-2">Due Date</label>
              <div>:</div>
              <input
                value={task.due_date}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    due_date: e.target.value,
                  }))
                }
                type="date"
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            <div className="flex gap-12 px-4 py-2">
              <button className="bg-transparent border-red-500 border hover:bg-red-600 px-2 py-1 text-red-500 hover:text-white font-semibold rounded transition-all duration-150 ease-linear">
                Cancel
              </button>
              <button
                onClick={(e) => handleSaveTask(e)}
                className="bg-sky-500 hover:bg-sky-600 px-2 py-1 text-white font-semibold rounded transition-all duration-150 ease-linear"
              >
                Save Task
              </button>
            </div>
          </form>
        </div>
        {task.comments.length > 0 && (
          <div className="w-1/2 max-h-full overflow-y-auto">
            <h3 className="text-2xl font-semibold">Comments</h3>
            <div className="flex flex-col mt-5 px-4">
              {task.comments.map((comment, idx) => {
                return (
                  <>
                    <div className="rounded broder border-gray-200 border dark:border-neutral-800 p-1 ">
                      {comment}
                    </div>
                    {idx > 1 && idx < task.comments.length && (
                      <div className="w-full flex justify-center">
                        <div className="h-10 w-[2px] bg-gray-200 dark:bg-neutral-800"></div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Task;
