import { FC } from 'react';

import { FiPlus } from 'react-icons/fi';

import classes from './CreateNewFolder.module.scss';
import { IconContext } from 'react-icons';

const CreateNewFolder: FC = () => {
  return (
    <button className={classes.createFolderBtn}>
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
