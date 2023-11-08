import StateCue from "./StatusCue";
import { useNavigate } from "react-router-dom";

const TaskTable = ({ taskList, filter, checkedTasks, setCheckedTasks }) => {
  const history = useNavigate();
  function handleTaskCheckbox(e, id) {
    e.stopPropagation();
    setCheckedTasks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskid) => taskid !== id);
      } else {
        return [...checkedTasks, id];
      }
    });
  }
  return (
    <>
      <div className="p-2 py-4 w-full">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-800 border border-gray-200 dark:border-neutral-800 rounded">
          <thead className="bg-light-highlight text-light-navbartext dark:text-dark-navbartext dark:bg-dark-navbar">
            <tr>
              <th
                scope="col"
                className="py-2 px-1 text-sm text-left font-medium rtl:text-right"
              >
                <div className="flex items-center">
                  <span></span>
                </div>
              </th>

              <th
                scope="col"
                className="py-2 px-4 text-sm font-medium text-left rtl:text-right"
              >
                <span>Task</span>
              </th>

              <th
                scope="col"
                className="py-2 px-4 text-sm font-medium text-left rtl:text-right"
              >
                <span>Description</span>
              </th>
              <th
                scope="col"
                className="py-2 px-4 text-sm font-medium text-left rtl:text-right "
              >
                State
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-sm font-medium text-left rtl:text-right "
              >
                Due Date
              </th>
              <th
                scope="col"
                className="px-1 py-2 text-sm font-medium text-left rtl:text-right "
              >
                Open
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-gray-200 dark:divide-neutral-800 ">
            {taskList.map((task, idx) => {
              if (task.state.includes(filter)) {
                return (
                  <tr
                    key={idx}
                    className="hover:bg-gray-200 hover:dark:bg-neutral-800"
                  >
                    <td className="px-4 py-2 text-sm  whitespace-nowrap">
                      <input
                        checked={checkedTasks.includes(task.id)}
                        onChange={(e) => handleTaskCheckbox(e, task.id)}
                        type="checkbox"
                      />
                    </td>
                    <td className="px-4 py-2 text-sm whitespace-nowrap">
                      {task.name}
                    </td>
                    <td className="px-4 py-2 text-sm whitespace-nowrap">
                      {task.description}
                    </td>
                    <td className="px-4 py-2 text-sm w-32 whitespace-nowrap">
                      <StateCue state={task.state} />
                    </td>
                    <td className="px-4 py-2 text-sm  whitespace-nowrap">
                      {task.due_date}
                    </td>
                    <td>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          history(`/task/${task.id}`);
                        }}
                        className="p-1 h-6 w-6 flex justify-center items-center hover:bg-gray-300 hover:dark:bg-neutral-700 rounded transition-all cursor-pointer duration-150 ease-linear"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-full w-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                );
              } else if (filter === "Ascending" || filter === "Descending") {
                return (
                  <tr
                    key={idx}
                    className="hover:bg-gray-200 hover:dark:bg-neutral-800"
                  >
                    <td className="px-4 py-2 text-sm  whitespace-nowrap">
                      <input
                        checked={checkedTasks.includes(task.id)}
                        onChange={(e) => handleTaskCheckbox(e, task.id)}
                        type="checkbox"
                      />
                    </td>
                    <td className="px-4 py-2 text-sm whitespace-nowrap">
                      {task.name}
                    </td>
                    <td className="px-4 py-2 text-sm whitespace-nowrap">
                      {task.description}
                    </td>
                    <td className="px-4 py-2 text-sm w-32 whitespace-nowrap">
                      <StateCue state={task.state} />
                    </td>
                    <td className="px-4 py-2 text-sm  whitespace-nowrap">
                      {task.due_date}
                    </td>
                    <td>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          history(`/task/${task.id}`);
                        }}
                        className="p-1 h-6 w-6 flex justify-center items-center hover:bg-gray-300 hover:dark:bg-neutral-700 rounded transition-all cursor-pointer duration-150 ease-linear"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-full w-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                );
              } else {
                return <></>;
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskTable;
