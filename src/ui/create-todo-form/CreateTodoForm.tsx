import { FC, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { IoMdClose } from 'react-icons/io';

import { CreateTodoFormProps, FormTodoValues } from './CreateTodoForm.types';
import { ITodoData } from '../../types/todos';

import { useCreateTodoMutation } from '../../store/api/todos.api';

import classes from './CreateTodoForm.module.scss';

const CreateTodoForm: FC<CreateTodoFormProps> = ({
  isTodosModalOpen,
  setIsTodosModalOpen,
}) => {
  const [createTodo, {}] = useCreateTodoMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm<FormTodoValues>({ mode: 'onChange' });
  //@ts-ignore
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
        className={classes.closeBtn}
        onClick={() => setIsTodosModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.formTitle}>Create a new task</h3>
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
        <button type='submit' className={classes.formBtn}>
          Create task
        </button>
      </form>
    </>
  );
};

export default CreateTodoForm;
