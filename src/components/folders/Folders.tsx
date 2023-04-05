import { FC } from 'react';

import classes from './Folders.module.scss';
import { useAppSelector } from '../../hooks/reduxHooks';
import clsx from 'clsx';
import FolderNotes from './folder-notes/FolderNotes';
import FolderTodos from './folder-todos/FolderTodos';
import FolderJournaling from './folder-journaling/FolderJournaling';

const Folders: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  return (
    <ul className={clsx(classes.folders, isNavOpen && 'opened')}>
      {/*add map*/}
      <FolderNotes />
      <FolderTodos />
      <FolderJournaling />
    </ul>
  );
};

export default Folders;
