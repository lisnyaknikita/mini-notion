import { FC, useEffect, useRef, useState } from 'react';

import classes from './FolderTodos.module.scss';
import Tooltip from '@mui/material/Tooltip';
import { FaFolder } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import FolderBadgeModal from '../../../ui/folderBadgeModal/FolderBadgeModal';
import { Link } from 'react-router-dom';
import { RxDotsHorizontal } from 'react-icons/rx';
import FolderEditModal from '../../../ui/folderEditModal/FolderEditModal';

const FolderTodos: FC = () => {
  const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);
  const [isBadgeClicked, setIsBadgeClicked] = useState(false);
  const [color, setColor] = useState('');

  const editBtnModalRef = useRef<HTMLLIElement>(null);
  const badgeModalRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleOutEditBtn = (e: any) => {
      if (!e.composedPath().includes(editBtnModalRef.current)) {
        setIsEditBtnClicked(false);
      }
    };

    const handleOutBadge = (e: any) => {
      if (!e.composedPath().includes(badgeModalRef.current)) {
        setIsBadgeClicked(false);
      }
    };

    document.body.addEventListener('click', handleOutEditBtn);
    document.body.addEventListener('click', handleOutBadge);

    return () => {
      document.body.removeEventListener('click', handleOutEditBtn);
      document.body.removeEventListener('click', handleOutBadge);
    };
  }, []);

  const handleChangeColor = (color: string) => {
    setColor(color);
  };

  return (
    <li className={classes.folder} ref={editBtnModalRef}>
      <Tooltip title='Change the color'>
        <span
          className={classes.badge}
          ref={badgeModalRef}
          onClick={() => setIsBadgeClicked((prev) => !prev)}
        >
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
      </Tooltip>
      {isBadgeClicked && (
        <FolderBadgeModal handleChangeColor={handleChangeColor} />
      )}
      <p>
        <Link to={'/todos'}>To-do list</Link>
      </p>
      <Tooltip title='Edit'>
        <button
          className={classes.editFolderBtn}
          onClick={() => setIsEditBtnClicked((prev) => !prev)}
        >
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
      </Tooltip>
      {isEditBtnClicked && <FolderEditModal />}
    </li>
  );
};

export default FolderTodos;
