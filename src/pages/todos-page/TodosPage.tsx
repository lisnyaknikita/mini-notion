import { FC } from 'react';

import { FiPlus } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import TodoItem from '../../components/todo-item/TodoItem';

import classes from './TodosPage.module.scss';
import { useGetTodosQuery } from '../../store/api/todos.api';

const TodosPage: FC = () => {
  const { data, isLoading, isError } = useGetTodosQuery(null);

  return (
    <div className={classes.inner}>
      <h2 className={classes.title}>To-do list</h2>
      <div className={classes.todos}>
        <p className={classes.number}>
          You've got 4 tasks coming up in the next days.
        </p>
        <Tooltip title='Add new task'>
          <button className={classes.addNewTask}>
            <FiPlus />
            <span>Add new task</span>
          </button>
        </Tooltip>
        <ul className={classes.todosList}>
          {data?.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;
