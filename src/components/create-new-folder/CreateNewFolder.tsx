import { FC } from 'react';

import { FiPlus } from 'react-icons/fi';

import classes from './CreateNewFolder.module.scss';
import { IconContext } from 'react-icons';
import { useAppSelector } from '../../hooks/reduxHooks';
import clsx from 'clsx';

const CreateNewFolder: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  return (
    <button className={clsx(classes.createFolderBtn, isNavOpen && 'opened')}>
      <span>
        <IconContext.Provider
          value={{
            color: 'white',
            className: 'global-class-name',
            size: '2em',
          }}
        >
          {<FiPlus />}
        </IconContext.Provider>
      </span>
      <span className={classes.createText}>New folder</span>
    </button>
  );
};

export default CreateNewFolder;
