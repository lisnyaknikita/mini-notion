import { FC } from 'react';

import classes from './SettingsModal.module.scss';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel, Switch } from '@mui/material';
import { SettingsModalProps } from './SettingsModalTypes';
import { IoMdClose } from 'react-icons/io';

const SettingsModal: FC<SettingsModalProps> = ({ setIsModalOpen }) => {
  return (
    <>
      <button
        className={classes.closeBtn}
        onClick={() => setIsModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <FormGroup>
        <FormControlLabel control={<Switch />} label='Dark mode' />
      </FormGroup>
    </>
  );
};

export default SettingsModal;
