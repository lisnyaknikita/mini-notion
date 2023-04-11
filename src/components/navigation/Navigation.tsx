import { FC, useContext } from 'react';

import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

import UserInfo from '../user-info/UserInfo';
import Folders from '../folders/Folders';
import Settings from '../settings/Settings';

import clsx from 'clsx';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { toggleNavOpen } from '../../store/slices/navigationSlice';

import Tooltip from '@mui/material/Tooltip';

import classes from './Navigation.module.scss';
import { ThemeContext } from '../../providers/ThemeContext';

const Navigation: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const dispatch = useAppDispatch();
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  return (
    <div
      className={clsx(
        classes.navigation,
        isNavOpen && 'opened',
        !isNavOpen && '',
        !darkMode && 'light'
      )}
    >
      <Tooltip title='Show/Hide'>
        <button
          className={clsx(
            classes.showHideBtn,
            isNavOpen && 'opened',
            !darkMode && 'light'
          )}
          onClick={() => dispatch(toggleNavOpen())}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
      </Tooltip>

      <UserInfo />
      <Folders />
      <Settings />
    </div>
  );
};

export default Navigation;
