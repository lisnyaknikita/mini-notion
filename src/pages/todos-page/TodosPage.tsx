import { FC, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import TodoItem from '../../components/todo-item/TodoItem';

import classes from './TodosPage.module.scss';
import { useGetTodosQuery } from '../../store/api/todos.api';
import ModalForm from '../../ui/modal-form/ModalForm';
import CreateTodoForm from '../../ui/create-todo-form/CreateTodoForm';

const TodosPage: FC = () => {
  const { data, isLoading, isError } = useGetTodosQuery(null);

  const [isTodosModalOpen, setIsTodosModalOpen] = useState(false);

  return (
    <div className={classes.inner}>
      <h2 className={classes.title}>To-do list</h2>
      <div className={classes.todos}>
        <p className={classes.number}>
          You've got {data?.length} tasks coming up in the next days.
        </p>
        <Tooltip title='Add new task'>
          <button
            className={classes.addNewTask}
            onClick={() => setIsTodosModalOpen(true)}
          >
            <FiPlus />
            <span>Add new task</span>
          </button>
        </Tooltip>
        {isTodosModalOpen && (
          <ModalForm>
            <CreateTodoForm
              isTodosModalOpen={isTodosModalOpen}
              setIsTodosModalOpen={setIsTodosModalOpen}
            />
          </ModalForm>
        )}
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
