import { FC, useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import classes from './NotesPage.module.scss';

import { FiPlus } from 'react-icons/fi';

import Note from '../../components/note/Note';

import Tooltip from '@mui/material/Tooltip';

import ModalForm from '../../ui/modal-form/ModalForm';
import CreateNoteForm from '../../ui/create-note-form/CreateNoteForm';

import { useGetNotesQuery } from '../../store/api/notes.api';

import { INote } from '../../types/notes';

import { ThemeContext } from '../../providers/ThemeContext';

import clsx from 'clsx';

const NotesPage: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const { data, isLoading, isError } = useGetNotesQuery(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  return (
    <div className={classes.inner}>
      {isNoteModalOpen && (
        <ModalForm>
          <CreateNoteForm setIsNoteModalOpen={setIsNoteModalOpen} />
        </ModalForm>
      )}
      <h2 className={clsx(classes.title, !darkMode && 'light')}>Notes</h2>
      <Tooltip title='Add new note'>
        <button
          className={clsx(classes.addNewNote, !darkMode && 'light')}
          onClick={() => setIsNoteModalOpen(true)}
        >
          <FiPlus />
          <span>Add new note</span>
        </button>
      </Tooltip>

      <ul className={classes.notesList}>
        {data?.length === 0 && (
          <h2
            style={{
              fontSize: 32,
              textAlign: 'center',
              color: `${darkMode ? '#feffff' : '#000'}`,
            }}
          >
            You don’t have any notes
          </h2>
        )}
        {isError && <h2 style={{ color: 'red' }}>Error!</h2>}
        {isLoading && (
          <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='#feffff'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClass='loader'
            visible={true}
          />
        )}
        {data?.map((note: INote) => (
          <Note key={note.id} id={note.id} />
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;
