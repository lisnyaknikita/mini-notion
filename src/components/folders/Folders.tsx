import { FC } from 'react';

import { FaFolder } from 'react-icons/fa';
import { RxDotsHorizontal } from 'react-icons/rx';

import classes from './Folders.module.scss';
import { IconContext } from 'react-icons';

const Folders: FC = () => {
  const color = 'blue';

  return (
    <ul className={classes.folders}>
      <li>
        <div className={classes.folder}>
          <span className={classes.badge}>
            <IconContext.Provider
              value={{
                color: `${color}`,
                className: 'global-class-name',
                size: '1.5em',
              }}
            >
              <FaFolder />
            </IconContext.Provider>
          </span>
          <p>Notes</p>
          <button className={classes.editFolderBtn}>
            <IconContext.Provider
              value={{
                color: '#bcbdbf',
                className: 'global-class-name',
                size: '1.6em',
              }}
            >
              {<RxDotsHorizontal />}
            </IconContext.Provider>
          </button>
        </div>
      </li>
      <li>
        <div className={classes.folder}>
          <span className={classes.badge}>
            <IconContext.Provider
              value={{
                color: 'green',
                className: 'global-class-name',
                size: '1.5em',
              }}
            >
              <FaFolder />
            </IconContext.Provider>
          </span>
          <p>Todo list</p>
          <button className={classes.editFolderBtn}>
            <IconContext.Provider
              value={{
                color: '#bcbdbf',
                className: 'global-class-name',
                size: '1.6em',
              }}
            >
              {<RxDotsHorizontal />}
            </IconContext.Provider>
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Folders;
