import { FC } from 'react';

import classes from './FolderEditModal.module.scss';

const FolderEditModal: FC = () => {
  return (
    <div className={classes.editModal}>
      <button className={classes.modalBtn}>Delete</button>
      <button className={classes.modalBtn}>Rename</button>
    </div>
  );
};

export default FolderEditModal;
