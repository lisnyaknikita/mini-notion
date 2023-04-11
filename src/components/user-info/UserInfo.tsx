import { FC, useEffect, useState } from 'react';

import { RiUser3Line } from 'react-icons/ri';
import { VscEdit } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

import clsx from 'clsx';

import { useAppSelector } from '../../hooks/reduxHooks';

import ModalForm from '../../ui/modal-form/ModalForm';
import EnterNameForm from '../../ui/enter-name-form/EnterNameForm';

import Tooltip from '@mui/material/Tooltip';

import classes from './UserInfo.module.scss';

const UserInfo: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  const [name, setName] = useState<string>(
    String(localStorage.getItem('name'))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const nameValue = localStorage.getItem('name');
    !nameValue && setIsModalOpen(true);
  }, [name]);

  return (
    <>
      {isModalOpen && (
        <ModalForm>
          <EnterNameForm
            setIsModalOpen={setIsModalOpen}
            name={name}
            setName={setName}
          />
        </ModalForm>
      )}
      <div className={clsx(classes.userInfo, isNavOpen && 'opened')}>
        <IconContext.Provider
          value={{
            color: 'white',
            className: 'global-class-name',
            size: '2em',
          }}
        >
          <RiUser3Line />
        </IconContext.Provider>
        <p>{name}</p>
        <Tooltip title='Edit name'>
          <button
            className={classes.editBtn}
            onClick={() => setIsModalOpen(true)}
          >
            <VscEdit />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default UserInfo;
