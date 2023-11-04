import React, { createContext, useEffect, useState } from "react";

const TaskListContext = createContext([]);

const TaskListProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    const tasks = localStorage.getItem("taskList")
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
