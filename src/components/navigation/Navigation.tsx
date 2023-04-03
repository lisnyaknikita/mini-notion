import { FC, useState } from 'react';

import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

import classes from './Navigation.module.scss';

import UserInfo from '../user-info/UserInfo';
import Folders from '../folders/Folders';
import CreateNewFolder from '../create-new-folder/CreateNewFolder';
import clsx from 'clsx';

const Navigation: FC = () => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div
      className={clsx(
        classes.navigation,
        isOpened && 'opened',
        !isOpened && ''
      )}
    >
      <button
        className={clsx(classes.showHideBtn, isOpened && 'opened')}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>

      <UserInfo />
      <Folders />
      <CreateNewFolder />
    </div>
  );
};

export default Navigation;
