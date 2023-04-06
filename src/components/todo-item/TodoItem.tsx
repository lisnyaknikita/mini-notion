import { FC, useState } from 'react';

import classes from './TodoItem.module.scss';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import clsx from 'clsx';
import { TodoItemProps } from './TodoItemTypes';
import { useGetTodoByIdQuery } from '../../store/api/todos.api';
import { ThreeDots } from 'react-loader-spinner';

const TodoItem: FC<TodoItemProps> = ({ id }) => {
  const { data, isLoading, isError } = useGetTodoByIdQuery(id);

  const [done, setDone] = useState(false);

  const handleDoneStatus = () => {
    setDone((prev) => !prev);
  };

  return (
    <li className={clsx(classes.todoItem, done && 'done')}>
      {isError && <h1>Error!</h1>}
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
              checked={done}
              onChange={handleDoneStatus}
            />
          }
          label={data?.title}
        />
      </FormGroup>
      <p className={classes.todoDescr}>{data?.text}</p>
      <button className={classes.deleteBtn}>Delete</button>
    </li>
  );
};

export default TodoItem;
