export function ValidateTaskForm(taskForm) {
    console.log(taskForm)
  if (taskForm.name === "") {
    return "please enter Task name";
  } else if (taskForm.description === "") {
    return "Please enter Task description";
  } else if (taskForm.due_date === "") {
    return "Please enter Task due date";
  } else {
    return "true";
  }
}
