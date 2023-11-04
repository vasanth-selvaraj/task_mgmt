import React, { createContext, useEffect, useState } from "react";

const TaskListContext = createContext([]);

const TaskListProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([{
    id: "9999",
    name: "Demo Task",
    description: "Description for Demo Task",
    due_date: "2023-11-09",
    comment: "",
    comments: ["1st Comment","Second Comment"],
    state: "To Do",
    completed_date: "",
  }]);

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem("taskList"))
    if(tasks){
        setTaskList(tasks)
    }
  },[])

  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};

export { TaskListProvider, TaskListContext };
