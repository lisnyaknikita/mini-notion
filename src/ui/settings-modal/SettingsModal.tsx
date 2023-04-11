import { FC, useContext } from 'react';

import classes from './SettingsModal.module.scss';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel, Switch } from '@mui/material';
import { SettingsModalProps } from './SettingsModal.types';
import { IoMdClose } from 'react-icons/io';
import clsx from 'clsx';
import { ThemeContext } from '../../providers/ThemeContext';

const SettingsModal: FC<SettingsModalProps> = ({ setIsModalOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <button
        className={clsx(classes.closeBtn, !darkMode && 'light')}
        onClick={() => setIsModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label='Dark mode'
          style={{ color: `${'#2d2d34'}` }}
        />
      </FormGroup>
    </>
  );
};

export default SettingsModal;
