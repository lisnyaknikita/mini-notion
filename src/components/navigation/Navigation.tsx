import { FC } from 'react';

import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

import classes from './Navigation.module.scss';

import UserInfo from '../user-info/UserInfo';
import Folders from '../folders/Folders';
import Settings from '../settings/Settings';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { toggleNavOpen } from '../../store/slices/navigationSlice';

const Navigation: FC = () => {
  const dispatch = useAppDispatch();
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  return (
    <div
      className={clsx(
        classes.navigation,
        isNavOpen && 'opened',
        !isNavOpen && ''
      )}
    >
      <button
        className={clsx(classes.showHideBtn, isNavOpen && 'opened')}
        onClick={() => dispatch(toggleNavOpen())}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>

      <UserInfo />
      <Folders />
      <Settings />
    </div>
  );
};

export default Navigation;
