import { FC, useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import classes from './EnterNameForm.module.scss';

import { EnterNameFormProps, Inputs } from './EnterNameForm.types';

import { ThemeContext } from '../../providers/ThemeContext';

import clsx from 'clsx';

const EnterNameForm: FC<EnterNameFormProps> = ({
  setIsModalOpen,
  name,
  setName,
}) => {
  const { darkMode } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });

  const onSubmitHandler: SubmitHandler<Inputs> = (data: Inputs) => {
    localStorage.setItem('name', data.name);
    setIsModalOpen(false);
  };

  useEffect(() => {
    setFocus('name');
  }, []);

  return (
    <>
      <form
        className={clsx(classes.form, !darkMode && 'light')}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <h3>We need your name</h3>
        <input
          {...register('name', { required: 'Enter your name' })}
          type='text'
          placeholder='Enter your name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && (
          <p style={{ color: 'red', marginTop: -40 }}>{errors.name.message}</p>
        )}
        <button
          className={clsx(classes.formBtn, !darkMode && 'light')}
          type='submit'
        >
          Enter
        </button>
      </form>
    </>
  );
};

export default EnterNameForm;
