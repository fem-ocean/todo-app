import React, { FC } from "react";
import { ITask } from "../interface";

interface Props {
  task: ITask;
}

const TodoTasks = ({ task }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
        <button>X</button>
      </div>
    </div>
  );
};

export default TodoTasks;
