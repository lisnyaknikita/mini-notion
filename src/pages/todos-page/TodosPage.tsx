import { FC, useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { FiPlus } from 'react-icons/fi';

import TodoItem from '../../components/todo-item/TodoItem';

import { useGetTodosQuery } from '../../store/api/todos.api';

import ModalForm from '../../ui/modal-form/ModalForm';
import CreateTodoForm from '../../ui/create-todo-form/CreateTodoForm';
import Tooltip from '@mui/material/Tooltip';

import classes from './TodosPage.module.scss';

import { ThemeContext } from '../../providers/ThemeContext';

import clsx from 'clsx';

const TodosPage: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const { data, isLoading, isError } = useGetTodosQuery(null);

  const [isTodosModalOpen, setIsTodosModalOpen] = useState(false);

  return (
    <div className={classes.inner}>
      <h2 className={clsx(classes.title, !darkMode && 'light')}>To-do list</h2>
      <div className={classes.todos}>
        <p className={clsx(classes.number, !darkMode && 'light')}>
          You've got <span>{data?.length}</span> tasks coming up in the next
          days.
        </p>
        <Tooltip title='Add new task'>
          <button
            className={clsx(classes.addNewTask, !darkMode && 'light')}
            onClick={() => setIsTodosModalOpen(true)}
          >
            <FiPlus />
            <span>Add new task</span>
          </button>
        </Tooltip>
        {isTodosModalOpen && (
          <ModalForm>
            <CreateTodoForm setIsTodosModalOpen={setIsTodosModalOpen} />
          </ModalForm>
        )}
        <ul className={classes.todosList}>
          {isError && <h2 style={{ color: 'red' }}>Error!</h2>}
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
          {data?.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;
