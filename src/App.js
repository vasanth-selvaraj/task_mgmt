import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import { Dashboard, TaskList, Task } from "./Pages/PagesExport";
import { useContext, useEffect } from "react";
import { TaskListContext } from "./Context/TaskListProvider";

function App() {
  const { taskList } = useContext(TaskListContext);

  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/task-list"
        element={
          <Layout>
            <TaskList />
          </Layout>
        }
      />
      <Route
        path="/new-task/:id"
        element={
          <Layout>
            <Task />
          </Layout>
        }
      />
      <Route
        path="/task/:id"
        element={
          <Layout>
            <Task />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
