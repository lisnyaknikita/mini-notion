import { FC } from 'react';

import classes from './Note.module.scss';
import { Link } from 'react-router-dom';
import {
  useDeleteNoteMutation,
  useGetNoteByIdQuery,
} from '../../store/api/notes.api';
import { NoteProps } from './NoteTypes';
import { ThreeDots } from 'react-loader-spinner';

const Note: FC<NoteProps> = ({ id }) => {
  const { data, isLoading, isError } = useGetNoteByIdQuery(id);
  const [deleteNote, {}] = useDeleteNoteMutation();

  return (
    <li className={classes.note}>
      {isError && <h2>Error!</h2>}
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
        <p className={classes.noteText}>{data?.text}</p>
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
