import { FC, PropsWithChildren, useRef } from 'react';

import classes from './ModalForm.module.scss';

const ModalForm: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.modalBg}>
      <div className={classes.modalBody}>{children}</div>
    </div>
  );
};

export default ModalForm;
