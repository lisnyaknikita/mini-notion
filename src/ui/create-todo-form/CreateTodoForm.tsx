import { FC, useEffect, useRef } from 'react';

import classes from './CreateTodoForm.module.scss';
import { IoMdClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { CreateTodoFormProps, FormTodoValues } from './CreateTodoFormTypes';
import { useCreateTodoMutation } from '../../store/api/todos.api';
import { ITodoData } from '../../types/todos';

const CreateTodoForm: FC<CreateTodoFormProps> = ({
  isTodosModalOpen,
  setIsTodosModalOpen,
}) => {
  const [createTodo, { isError }] = useCreateTodoMutation();

  const firstInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormTodoValues>({ mode: 'onChange' });
  //@ts-ignore
  const onSubmit: SubmitHandler<FormTodoValues> = (data: ITodoData) => {
    createTodo({ ...data, status: false });

    reset();
    setIsTodosModalOpen(false);
  };

  useEffect(() => {
    if (firstInputRef.current && isTodosModalOpen) {
      firstInputRef.current.focus();
    }
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
          ref={firstInputRef}
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
