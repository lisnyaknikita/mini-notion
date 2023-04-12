import { FC, useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IoMdClose } from 'react-icons/io';

import { CreateTodoFormProps, FormTodoValues } from './CreateTodoForm.types';
import { ITodoData } from '../../types/todos';

import { useCreateTodoMutation } from '../../store/api/todos.api';

import classes from './CreateTodoForm.module.scss';

import { ThemeContext } from '../../providers/ThemeContext';

import clsx from 'clsx';

const CreateTodoForm: FC<CreateTodoFormProps> = ({ setIsTodosModalOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  const [createTodo, {}] = useCreateTodoMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm<FormTodoValues>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<FormTodoValues> = (data: ITodoData) => {
    createTodo({ ...data, status: false });
    reset();
    setIsTodosModalOpen(false);
  };

  useEffect(() => {
    setFocus('title');
  }, []);

  return (
    <>
      <button
        className={clsx(classes.closeBtn, !darkMode && 'light')}
        onClick={() => setIsTodosModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <form
        className={clsx(classes.form, !darkMode && 'light')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={clsx(classes.formTitle, !darkMode && 'light')}>
          Create a new task
        </h3>
        <input
          {...register('title', { required: 'Enter the title, please' })}
          type='text'
          placeholder='Enter the title...'
        />
        {errors?.title && (
          <p style={{ color: 'red', marginTop: -10, marginBottom: 5 }}>
            {errors.title.message}
          </p>
        )}
        <input
          {...register('text')}
          type='text'
          placeholder='Enter the description...'
        />
        <button
          type='submit'
          className={clsx(classes.formBtn, !darkMode && 'light')}
        >
          Create task
        </button>
      </form>
    </>
  );
};

export default CreateTodoForm;
