import { FC, FormEvent, ReactEventHandler } from 'react';

import classes from './CreateNoteForm.module.scss';
import { CreateNoteFormProps, FormValues } from './CreateNoteFormTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateNoteMutation } from '../../store/api/notes.api';
import { INoteData } from '../../types/notes';

const CreateNoteForm: FC<CreateNoteFormProps> = ({
  isNoteModalOpen,
  setIsNoteModalOpen,
}) => {
  const [createNote, { isError }] = useCreateNoteMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });
  //@ts-ignore
  const onSubmit: SubmitHandler<FormValues> = (data: INoteData) => {
    createNote(data);
    reset();
    setIsNoteModalOpen(false);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={classes.formTitle}>Create a new note</h3>
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
        placeholder='Enter the image link...'
      />
      <button type='submit' className={classes.formBtn}>
        Create note
      </button>
    </form>
  );
};

export default CreateNoteForm;
