import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import { Dashboard, TaskList } from "./Pages/PagesExport";

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
    </Routes>
  );
}

export default App;
