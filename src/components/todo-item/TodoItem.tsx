import { FC, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import clsx from 'clsx';

import { TodoItemProps } from './TodoItem.types';

import {
  useDeleteTodoMutation,
  useGetTodoByIdQuery,
  useUpdateStatusMutation,
} from '../../store/api/todos.api';

import classes from './TodoItem.module.scss';

import { ThemeContext } from '../../providers/ThemeContext';

const TodoItem: FC<TodoItemProps> = ({ id }) => {
  const { darkMode } = useContext(ThemeContext);

  const { data, isLoading, isError } = useGetTodoByIdQuery<any>(id);
  const [updateStatus, {}] = useUpdateStatusMutation();

  const [deleteTodo, {}] = useDeleteTodoMutation();

  const handleDoneStatus = () => {
    data && updateStatus({ ...data, status: !data?.status });
  };

  return (
    <li
      className={clsx(
        classes.todoItem,
        data?.status === true && 'done',
        !darkMode && 'light'
      )}
    >
      {isError && <h1 style={{ color: 'red' }}>Error!</h1>}
      {isLoading && (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='#feffff'
          ariaLabel='three-dots-loading'
          wrapperStyle={{}}
          wrapperClass='todoLoader'
          visible={true}
        />
      )}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              color='secondary'
              checked={data?.status}
              onChange={handleDoneStatus}
            />
          }
          label={data?.title}
        />
      </FormGroup>
      <p className={clsx(classes.todoDescr, !darkMode && 'light')}>
        {data?.text}
      </p>
      <button
        className={clsx(classes.deleteBtn, !darkMode && 'light')}
        onClick={() => deleteTodo(data?.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
