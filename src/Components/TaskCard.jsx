import { useNavigate } from "react-router-dom";
import StateCue from "../Components/StatusCue";

const TaskCard = ({ task, fromList, checkedTasks, setCheckedTasks }) => {
  const history = useNavigate();

  function handleTaskCheckbox(e, id) {
    setCheckedTasks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskid) => taskid !== id);
      } else {
        return [...checkedTasks, id];
      }
    });
  }
  return (
    <div className="w-60 grid grid-cols-7 text-sm gap-2 group rounded border border-gray-200 dark:border-neutral-800 p-2">
      <div className="col-span-2">Task</div>
      <div className="col-span-1">:</div>
      <div className="col-span-4 text-ellipsis whitespace-nowrap overflow-hidden">
        {task.name}
      </div>
      <div className="col-span-2">Due</div>
      <div className="col-span-1">:</div>
      <div className="col-span-4">{task.due_date}</div>
      {fromList && (
        <div className="col-span-1 cursor-pointer">
          <input
            checked={checkedTasks.includes(task.id)}
            onChange={(e) => handleTaskCheckbox(e, task.id)}
            type="checkbox"
            className="cursor-pointer"
          />
        </div>
      )}
      <div
        onClick={() => history(`/task/${task.id}`)}
        className="col-span-1 hidden group-hover:flex w-14 gap-1 pl-1 items-center py-[2px] cursor-pointer bg-gray-200 dark:bg-neutral-800 rounded"
      >
        <h3 className="text-xs">Open</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-3.5 w-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </div>

      <div className="col-start-5 col-span-3 justify-end flex pr-2">
        <StateCue state={task.state} />
      </div>
    </div>
  );
};

export default TaskCard;
