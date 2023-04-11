import { FC, useEffect, useState } from 'react';

import classes from './EnterNameForm.module.scss';
import { EnterNameFormProps, Inputs } from './EnterNameForm.types';
import { SubmitHandler, useForm } from 'react-hook-form';

const EnterNameForm: FC<EnterNameFormProps> = ({
  setIsModalOpen,
  name,
  setName,
}) => {
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
      <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
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
        <button className={classes.formBtn} type='submit'>
          Enter
        </button>
      </form>
    </>
  );
};

export default EnterNameForm;
