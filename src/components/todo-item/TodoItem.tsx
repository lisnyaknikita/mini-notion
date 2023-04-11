import { FC } from 'react';
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

const TodoItem: FC<TodoItemProps> = ({ id }) => {
  const { data, isLoading, isError } = useGetTodoByIdQuery(id);
  const [updateStatus, {}] = useUpdateStatusMutation();

  const [deleteTodo, {}] = useDeleteTodoMutation();

  const handleDoneStatus = () => {
    //@ts-ignore
    updateStatus({ ...data, status: !data?.status });
  };

  return (
    <li className={clsx(classes.todoItem, data?.status === true && 'done')}>
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
      <p className={classes.todoDescr}>{data?.text}</p>
      <button
        className={classes.deleteBtn}
        //@ts-ignore
        onClick={() => deleteTodo(data?.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
