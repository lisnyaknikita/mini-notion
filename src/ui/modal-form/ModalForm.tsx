import { FC, PropsWithChildren, useContext } from 'react';

import classes from './ModalForm.module.scss';

import { ThemeContext } from '../../providers/ThemeContext';

import clsx from 'clsx';

const ModalForm: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={classes.modalBg}>
      <div className={clsx(classes.modalBody, !darkMode && 'light')}>
        {children}
      </div>
    </div>
  );
};

export default ModalForm;
