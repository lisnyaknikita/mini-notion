import { FC, useContext, useState } from 'react';

import { IconContext } from 'react-icons';
import { FiSettings } from 'react-icons/fi';

import classes from './Settings.module.scss';

import { useAppSelector } from '../../hooks/reduxHooks';

import clsx from 'clsx';

import ModalForm from '../../ui/modal-form/ModalForm';
import SettingsModal from '../../ui/settings-modal/SettingsModal';

import { ThemeContext } from '../../providers/ThemeContext';

const Settings: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={clsx(
          classes.settings,
          isNavOpen && 'opened',
          !darkMode && 'light'
        )}
        onClick={() => {
            setIsModalOpen(true);
        }}
      >
        <span>
          <IconContext.Provider
            value={{
              color: `${!darkMode ? '#2d2d34' : 'white'}`,
              className: 'global-class-name',
              size: '2em',
            }}
          >
            {<FiSettings />}
          </IconContext.Provider>
        </span>
        <span
          className={clsx(classes.createText, !darkMode && 'light')}

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
