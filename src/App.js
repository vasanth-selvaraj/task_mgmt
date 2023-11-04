import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import { Dashboard, TaskList, Task } from "./Pages/PagesExport";

function App() {
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