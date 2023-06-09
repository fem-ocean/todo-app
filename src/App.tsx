import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import TodoTasks from "./Components/TodoTasks";

//Interface
import { ITask } from "./interface";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            name="deadline"
            type="number"
            placeholder="Deadline (in days)"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}> Add Task </button>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTasks key={key} task={task} />;
        })}
      </div>
    </div>
  );
};

export default App;
