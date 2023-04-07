import { FC, useState } from 'react';

import { FiSettings } from 'react-icons/fi';

import classes from './Settings.module.scss';
import { IconContext } from 'react-icons';
import { useAppSelector } from '../../hooks/reduxHooks';
import clsx from 'clsx';
import ModalForm from '../../ui/modal-form/ModalForm';
import SettingsModal from '../../ui/settings-modal/SettingsModal';

const Settings: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={clsx(classes.settings, isNavOpen && 'opened')}>
        <span>
          <IconContext.Provider
            value={{
              color: 'white',
              className: 'global-class-name',
              size: '2em',
            }}
          >
            {<FiSettings />}
          </IconContext.Provider>
        </span>
        <span
          className={classes.createText}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Settings
        </span>
      </button>
      {isModalOpen && (
        <ModalForm>
          <SettingsModal setIsModalOpen={setIsModalOpen} />
        </ModalForm>
      )}
    </>
  );
};

export default Settings;
