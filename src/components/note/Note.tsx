import { FC, useContext } from 'react';

import { Link } from 'react-router-dom';
import classes from './Note.module.scss';

import { ThreeDots } from 'react-loader-spinner';

import {
  useDeleteNoteMutation,
  useGetNoteByIdQuery,
} from '../../store/api/notes.api';
import { NoteProps } from './Note.types';

import { useAppSelector } from '../../hooks/reduxHooks';

import clsx from 'clsx';

import { ThemeContext } from '../../providers/ThemeContext';

const Note: FC<NoteProps> = ({ id }) => {
  const { darkMode } = useContext(ThemeContext);

  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  const { data, isLoading, isError } = useGetNoteByIdQuery<any>(id);
  const [deleteNote, {}] = useDeleteNoteMutation();

  const noteTextWithoutTags =
    data && new DOMParser().parseFromString(data?.text, 'text/html');

  return (
    <li className={clsx(classes.note, !isNavOpen && 'full')}>
      {isError && <h2 style={{ color: 'red' }}>Error!</h2>}
      <Link
        to={`/notes/${data?.id}`}
        className={clsx(classes.noteLink, !darkMode && 'light')}
      >
        {isLoading && (
          <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='#feffff'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClass='noteLoader'
            visible={true}
          />
        )}
        <h3 className={clsx(classes.noteTitle, !darkMode && 'light')}>
          {data && data?.title}
        </h3>
        <p className={clsx(classes.noteText, !darkMode && 'light')}>
          {noteTextWithoutTags?.body.textContent}
        </p>
      </Link>
      <button
        className={classes.deleteBtn}
        onClick={() => deleteNote(data?.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Note;
