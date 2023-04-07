import { FC, FormEvent, ReactEventHandler, useEffect, useRef } from 'react';

import classes from './CreateNoteForm.module.scss';
import { CreateNoteFormProps, FormValues } from './CreateNoteFormTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateNoteMutation } from '../../store/api/notes.api';
import { INoteData } from '../../types/notes';
import { IoMdClose } from 'react-icons/io';

const CreateNoteForm: FC<CreateNoteFormProps> = ({
  isNoteModalOpen,
  setIsNoteModalOpen,
}) => {
  const [createNote, { isError }] = useCreateNoteMutation();

  const firstInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (isNoteModalOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isNoteModalOpen]);

  return (
    <>
      <button
        className={classes.closeBtn}
        onClick={() => setIsNoteModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.formTitle}>Create a new note</h3>
        <input
          {...register('title')}
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
          {...register('bgUrl')}
          type='text'
          placeholder='Enter the image link(optional)...'
        />
        <button type='submit' className={classes.formBtn}>
          Create note
        </button>
      </form>
    </>
  );
};

export default CreateNoteForm;
