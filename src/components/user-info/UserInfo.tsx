import { FC } from 'react';

import { RiUser3Line } from 'react-icons/ri';

import classes from './UserInfo.module.scss';
import { IconContext } from 'react-icons';

const UserInfo: FC = () => {
  return (
    <div className={classes.userInfo}>
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
