import React, { createContext, useState } from "react";
// import { useParams } from "react-router-dom";
const TaskContext = createContext({});

const TaskProvider = ({ children }) => {

    // const {id} = useParams();
    const [task, setTask] = useState({
        id: 0,
        name: "",
        description: "",
        due_date: "",
        comment: "",
        comments: [],
        state: "To Do",
        completed_date: "",
      });

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
