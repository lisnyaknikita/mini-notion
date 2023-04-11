import { FC } from 'react';

import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import {
  useDeleteNoteMutation,
  useGetNoteByIdQuery,
} from '../../store/api/notes.api';
import { NoteProps } from './Note.types';

import { useAppSelector } from '../../hooks/reduxHooks';

import clsx from 'clsx';

import classes from './Note.module.scss';

const Note: FC<NoteProps> = ({ id }) => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  const { data, isLoading, isError } = useGetNoteByIdQuery(id);
  const [deleteNote, {}] = useDeleteNoteMutation();

  const noteTextWithoutTags = new DOMParser().parseFromString(
    //@ts-ignore
    data?.text,
    'text/html'
  );

  return (
    <li className={clsx(classes.note, !isNavOpen && 'full')}>
      {isError && <h2 style={{ color: 'red' }}>Error!</h2>}
      <Link to={`/notes/${data?.id}`} className={classes.noteLink}>
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
        <h3 className={classes.noteTitle}>{data && data?.title}</h3>
        <p className={classes.noteText}>
          {noteTextWithoutTags.body.textContent}
        </p>
      </Link>
      <button
        className={classes.deleteBtn}
        //@ts-ignore
        onClick={() => deleteNote(data?.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Note;
