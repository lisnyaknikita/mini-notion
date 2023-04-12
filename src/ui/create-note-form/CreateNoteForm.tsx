import { FC, useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateNoteFormProps, FormValues } from './CreateNoteForm.types';
import { INoteData } from '../../types/notes';

import { useCreateNoteMutation } from '../../store/api/notes.api';

import { IoMdClose } from 'react-icons/io';

import classes from './CreateNoteForm.module.scss';

import { ThemeContext } from '../../providers/ThemeContext';

import clsx from 'clsx';

const CreateNoteForm: FC<CreateNoteFormProps> = ({ setIsNoteModalOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  const [createNote, {}] = useCreateNoteMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm<FormValues>({ mode: 'onChange' });
  //@ts-ignore
  const onSubmit: SubmitHandler<FormValues> = (data: INoteData) => {
    createNote(data);
    reset();
    setIsNoteModalOpen(false);
  };

  useEffect(() => {
    setFocus('title');
  }, []);

  return (
    <>
      <button
        className={clsx(classes.closeBtn, !darkMode && 'light')}
        onClick={() => setIsNoteModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <form
        className={clsx(classes.form, !darkMode && 'light')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={clsx(classes.formTitle, !darkMode && 'light')}>
          Create a new note
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
          {...register('bgUrl')}
          type='text'
          placeholder='Enter the image link(optional)...'
        />
        <button
          type='submit'
          className={clsx(classes.formBtn, !darkMode && 'light')}
        >
          Create note
        </button>
      </form>
    </>
  );
};

export default CreateNoteForm;
