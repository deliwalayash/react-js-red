import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./features/Todos/todoSlice";

const App = () => {
  const [task, setTask] = useState({
    name: "",
    priority: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.id]: e.target.value });
  };
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <input type="text" id="name" value={task.name} onChange={handleChange} />
      <br />
      <br />

      <select
        name="priority"
        id="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="">Please Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <br />
      <br />

      <button
        onClick={() => {
          const existingTask = tasks.find((curEle) => {
            return curEle.id == task.id;
          });

          if (existingTask) {
            dispatch(updateTask(task));
          } else {
            dispatch(addTask(task));
          }
          setTask({ name: "", priority: "" });
        }}
      >
        Submit
      </button>

      {tasks.map((task, idx) => {
        return (
          <h3 key={task.id}>
            {idx + 1}.{task.name}.{task.priority}{" "}
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
            <button
              onClick={() => {
                setTask(task);
              }}
            >
              Update
            </button>
          </h3>
        );
      })}
    </div>
  );
};

export default App;
