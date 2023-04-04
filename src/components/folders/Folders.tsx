import { FC } from 'react';

import classes from './Folders.module.scss';
import { useAppSelector } from '../../hooks/reduxHooks';
import clsx from 'clsx';
import Folder from './folder/Folder';

const Folders: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  return (
    <ul className={clsx(classes.folders, isNavOpen && 'opened')}>
      {/*add map*/}
      <Folder />
      <Folder />
      <Folder />
    </ul>
  );
};

export default Folders;
