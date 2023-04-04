import { FC } from 'react';

import classes from './Note.module.scss';

const Note: FC = () => {
  return (
    <li className={classes.note}>
      <a className={classes.noteLink} href='#'>
        <h3 className={classes.noteTitle}>Title of a note</h3>
        <p className={classes.noteText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
          aspernatur. Illo, pariatur. Suscipit mollitia molestiae temporibus
          velit sequi quod accusantium, facilis natus nulla, reiciendis unde
          autem eligendi laboriosam repudiandae atque?
        </p>
      </a>
    </li>
  );
};

export default Note;
