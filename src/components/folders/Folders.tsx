import { FC } from 'react';

import { useAppSelector } from '../../hooks/reduxHooks';

import clsx from 'clsx';

import FolderNotes from './folder-notes/FolderNotes';
import FolderTodos from './folder-todos/FolderTodos';
import FolderJournaling from './folder-journaling/FolderJournaling';

import classes from './Folders.module.scss';

const Folders: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  return (
    <ul className={clsx(classes.folders, isNavOpen && 'opened')}>
      <FolderNotes />
      <FolderTodos />
      <FolderJournaling />
    </ul>
  );
};

export default Folders;
