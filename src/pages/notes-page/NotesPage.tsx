import { FC } from 'react';

import { FiPlus } from 'react-icons/fi';

import Note from '../../components/note/Note';

import classes from './NotesPage.module.scss';
import Tooltip from '@mui/material/Tooltip';
import { useGetNotesQuery } from '../../store/api/notes.api';
import { ThreeDots } from 'react-loader-spinner';

const NotesPage: FC = () => {
  const { data, isLoading, isError } = useGetNotesQuery(null);

  return (
    <div className={classes.inner}>
      <h2 className={classes.title}>Notes</h2>
      <div className={classes.notes}>
        <Tooltip title='Add new note'>
          <button className={classes.addNewNote}>
            <FiPlus />
            <span>Add new note</span>
          </button>
        </Tooltip>

        <ul className={classes.notesList}>
          {isError && <h2>Error!</h2>}
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
          {data?.map((note) => (
            <Note key={note.id} id={note.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesPage;
