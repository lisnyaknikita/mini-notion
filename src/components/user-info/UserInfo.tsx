import { FC } from 'react';

import { RiUser3Line } from 'react-icons/ri';

import classes from './UserInfo.module.scss';
import { IconContext } from 'react-icons';
import clsx from 'clsx';
import { useAppSelector } from '../../hooks/reduxHooks';

const UserInfo: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  return (
    <div className={clsx(classes.userInfo, isNavOpen && 'opened')}>
      <IconContext.Provider
        value={{ color: 'white', className: 'global-class-name', size: '2em' }}
      >
        <RiUser3Line />
      </IconContext.Provider>
      <p>Jarad</p>
    </div>
  );
};

export default UserInfo;
