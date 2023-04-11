import { FC } from 'react';

import { FolderBageModalProps } from './FolderBadgeModal.types';
import { useAppSelector } from '../../hooks/reduxHooks';

import classes from './FolderBadgeModal.module.scss';

const FolderBadgeModal: FC<FolderBageModalProps> = ({ handleChangeColor }) => {
  const colors = useAppSelector((state) => state.colors.colors);

  const onClickColor = (color: string) => {
    handleChangeColor(color);
  };

  return (
    <div className={classes.badgeModal}>
      <button
        style={{ backgroundColor: colors[0].hex }}
        className={classes.color}
        onClick={() => {
          onClickColor(colors[0].hex);
        }}
      ></button>
      <button
        style={{ backgroundColor: colors[1].hex }}
        className={classes.color}
        onClick={() => {
          onClickColor(colors[1].hex);
        }}
      ></button>
      <button
        style={{ backgroundColor: colors[2].hex }}
        className={classes.color}
        onClick={() => {
          onClickColor(colors[2].hex);
        }}
      ></button>
      <button
        style={{ backgroundColor: colors[3].hex }}
        className={classes.color}
        onClick={() => {
          onClickColor(colors[3].hex);
        }}
      ></button>
      <button
        style={{ backgroundColor: colors[4].hex }}
        className={classes.color}
        onClick={() => {
          onClickColor(colors[4].hex);
        }}
      ></button>
    </div>
  );
};

export default FolderBadgeModal;
