import { FC } from 'react';

import { FiPlus } from 'react-icons/fi';

import classes from './NotesPage.module.scss';
import Note from '../../components/note/Note';

const NotesPage: FC = () => {
  return (
    <div className={classes.inner}>
      <div className={classes.notes}>
        <button className={classes.addNewNote}>
          <FiPlus />
          <span>Add new note</span>
        </button>
        <ul className={classes.notesList}>
          <Note />
        </ul>
      </div>
    </div>
  );
};

export default NotesPage;
