import { FC, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';

import { FaFolder } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import FolderBadgeModal from '../../../ui/folder-badge-modal/FolderBadgeModal';

import classes from './FolderTodos.module.scss';
import { ThemeContext } from '../../../providers/ThemeContext';
import clsx from 'clsx';

const FolderTodos: FC = () => {
  const { darkMode } = useContext(ThemeContext);

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
    localStorage.setItem('todosFolderColor', color);
  };

  return (
    <li
      className={clsx(classes.folder, !darkMode && 'light')}
      ref={editBtnModalRef}
    >
      <Tooltip title='Change the color'>
        <span
          className={classes.badge}
          ref={badgeModalRef}
          onClick={() => setIsBadgeClicked((prev) => !prev)}
        >
          <IconContext.Provider
            value={{
              color: `${localStorage.getItem('todosFolderColor')}`,
              className: 'global-class-name',
              size: '2em',
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
    </li>
  );
};

export default FolderTodos;
