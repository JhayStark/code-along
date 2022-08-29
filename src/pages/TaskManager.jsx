import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import { v4 as uuid } from "uuid";
import { useTaskContext } from "../context/taskContext";

function TaskManager() {
  const { tasks, setValue } = useTaskContext();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setValue([newTask, ...tasks]);
    setInput("");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setValue(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div
      className="h-screen w-screen bg-blue-600 
        flex justify-center items-center"
    >
      <div className="max-w-xl max-h-96 bg-white rounded-lg px-5 py-10">
        <form
          action=""
          className="space-x-5 flex w-[30rem] mb-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="border-2 border-blue-600 p-2 rounded-md 
                    outline-none w-10/12 "
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className=" bg-blue-600 text-white text-lg py-2 px-5
                    rounded-md "
            disabled={input === ""}
          >
            ADD
          </button>
        </form>

        <div className="space-y-2 overflow-y-auto h-56">
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
