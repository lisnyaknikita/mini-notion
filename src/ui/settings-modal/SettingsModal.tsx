import { FC, useContext } from 'react';

import classes from './SettingsModal.module.scss';

import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel, Switch } from '@mui/material';

import { SettingsModalProps } from './SettingsModal.types';

import { IoMdClose } from 'react-icons/io';

import clsx from 'clsx';

import { ThemeContext } from '../../providers/ThemeContext';

const SettingsModal: FC<SettingsModalProps> = ({ setIsModalOpen }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <button
        className={clsx(classes.closeBtn, !darkMode && 'light')}
        onClick={() => setIsModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <div className={classes.toggleTheme}>
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label='Dark theme'
            style={{ color: `${!darkMode ? '#2d2d34' : '#feffff'}` }}
            onClick={toggleDarkMode}
          />
        </FormGroup>
      </div>
    </>
  );
};

export default SettingsModal;
