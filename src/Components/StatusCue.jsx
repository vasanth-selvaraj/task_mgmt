export default function StateCue({ state }) {
  switch (state) {
    case "To Do":
      return (
        <div className="flex items-center h-5 gap-2 px-2 rounded-3xl bg-purple-300 dark:bg-purple-800">
          <div className="h-1 w-1 rounded-full bg-purple-800 dark:bg-purple-100"></div>
          <h2 className="text-purple-800 dark:text-purple-200 text-xs font-semibold">
            {state}
          </h2>
        </div>
      );
    case "Active":
      return (
        <div className="flex items-center h-5 gap-2 px-2 rounded-3xl bg-sky-300 dark:bg-sky-800">
          <div className="h-1 w-1 rounded-full bg-sky-800 dark:bg-sky-100"></div>
          <h2 className="text-sky-800 dark:text-sky-100 text-xs font-semibold">
            {state}
          </h2>
        </div>
      );
    case "Completed":
      return (
        <div className="flex items-center h-5 gap-2 px-2 rounded-3xl bg-green-300 dark:bg-green-800">
          <div className="h-1 w-1 rounded-full bg-green-800 dark:bg-green-100"></div>
          <h2 className="text-green-800 dark:text-green-100 text-xs font-semibold">
            {state}
          </h2>
        </div>
      );
    default:
      return <></>;
  }
}
