import React from "react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { TaskListContext } from "../Context/TaskListProvider";
import StateCue from "../Components/StatusCue";
import { ValidateTaskForm } from "../Validation/validateForm";

const Task = () => {
  const Location = useLocation();
  const history = useNavigate();
  const { id } = useParams();
  const { taskList, setTaskList } = useContext(TaskListContext);
  const [error, setError] = useState("");

  const [task, setTask] = useState({
    id: id,
    name: "",
    description: "",
    due_date: "",
    comment: "",
    comments: [],
    state: "To Do",
    completed_date: "",
  });

  useEffect(() => {
    if (!Location.pathname.includes("new-task")) {
      taskList.forEach((task) => {
        console.log(task);
        task.id === id && setTask(task);
      });
    }
  }, [Location, id, taskList]);

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (ValidateTaskForm(task) === "true") {
      if (Location.pathname.includes("new-task")) {
        const updatedTask = { ...task };
        if (task.comment !== "") {
          updatedTask.comments.push(task.comment);
          updatedTask.comment = "";
        }
        setTaskList([...taskList, updatedTask]);
        localStorage.setItem(
          "taskList",
          JSON.stringify([...taskList, updatedTask])
        );
        setTask({});
        setError("");
        history(`/task/${id}`);
      } else {
        const updatedTaskList = [...taskList]; //taking copy of tasklist to push updated tasklist into the array
        const updatedTask = { ...task }; //taking copy of tasklist to psuh new comment if avalilabe to task.comments array
        if (task.comment !== "") {
          updatedTask.comments.push(task.comment);
          updatedTask.comment = "";
        }
        updatedTaskList.forEach((task, idx) => {
          if (task.id === id) {
            updatedTaskList[idx] = updatedTask;
          }
        });
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
        setTask(updatedTask);
        setError("");
        history(`/task/${id}`);
      }
    } else {
      setError(ValidateTaskForm(task));
    }
  };

  return (
    <>
      <div className="p-4 flex gap-4 lg:flex-row flex-col h-full lg:text-base text-sm">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-4 items-center">
            <h3 className="lg:text-3xl text-base font-semibold">
              {Location.pathname.includes("new-task")
                ? "New Task"
                : "Task - " + id}
            </h3>
            {<StateCue state={task.state} />}
          </div>
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
                value={task.name}
                onChange={(e) => setTask({ ...task, name: e.target.value })}
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            {!Location.pathname.includes("new-task") && (
              <div className="grid grid-cols-7 items-center">
                <label className="col-span-2">State</label>
                <div>:</div>
                <select
                  value={task.state}
                  onChange={(e) => setTask({ ...task, state: e.target.value })}
                  className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
                >
                  <option className="bg-white dark:bg-neutral-800">
                    Select
                  </option>
                  <option
                    value="To Do"
                    className="bg-white dark:bg-neutral-800"
                  >
                    To Do
                  </option>
                  <option
                    value="Active"
                    className="bg-white dark:bg-neutral-800"
                  >
                    Active
                  </option>
                  <option
                    value="Completed"
                    className="bg-white dark:bg-neutral-800"
                  >
                    Completed
                  </option>
                </select>
              </div>
            )}
            <div className="grid grid-cols-7 items-center">
              <label className="col-span-2">Description</label>
              <div>:</div>
              <textarea
                value={task.description}
                onChange={(e) =>
                  setTask({
                    ...task,
                    description: e.target.value,
                  })
                }
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            <div className="grid grid-cols-7 items-center">
              <label className="col-span-2">Comments</label>
              <div>:</div>
              <textarea
                value={task.comment}
                onChange={(e) =>
                  setTask({
                    ...task,
                    comment: e.target.value,
                  })
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
                  setTask({
                    ...task,
                    due_date: e.target.value,
                  })
                }
                type="date"
                className="col-span-4 p-1 rounded bg-transparent border-gray-200 dark:border-neutral-800 border h-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:dark:bg-neutral-800"
              />
            </div>
            <div className="flex gap-12 px-4 py-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  history("/");
                }}
                className="bg-transparent border-red-500 border hover:bg-red-600 px-2 py-1 text-red-500 hover:text-white font-semibold rounded transition-all duration-150 ease-linear"
              >
                Cancel
              </button>
              <button
                onClick={(e) => handleSaveTask(e)}
                className="bg-sky-500 hover:bg-sky-600 px-2 py-1 text-white font-semibold rounded transition-all duration-150 ease-linear"
              >
                {Location.pathname.includes("new-task")
                  ? "Save Task"
                  : "Update Task"}
              </button>
            </div>
            <h5 className="text-xs text-red-500 font-medium">{error}</h5>
          </form>
        </div>
        {task.comments !== undefined && task.comments.length > 0 && (
          <div className="w-full lg:w-1/2 h-96 overflow-y-auto">
            <h3 className="text-2xl font-semibold">Comments</h3>
            <div className="flex flex-col mt-5 px-4">
              {task.comments.map((comment, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <div className="rounded broder border-gray-200 border dark:border-neutral-800 p-1 ">
                      {comment}
                    </div>
                    {idx !== task.comments.length - 1 && (
                      <div className="w-full flex flex-col items-center gap-1">
                        <div className="h-2 w-[2px] bg-gray-200 dark:bg-neutral-800"></div>
                        <div className="h-1 w-[2px] bg-gray-200 dark:bg-neutral-800"></div>
                        <div className="h-1 w-[2px] bg-gray-200 dark:bg-neutral-800"></div>
                        <div className="h-2 w-[2px] bg-gray-200 dark:bg-neutral-800"></div>
                      </div>
                    )}
                  </React.Fragment>
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
