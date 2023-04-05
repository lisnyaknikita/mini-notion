import { FC, useState } from 'react';

import classes from './TodoItem.module.scss';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import clsx from 'clsx';

const TodoItem: FC = () => {
  const [done, setDone] = useState(false);

  const handleDoneStatus = () => {
    setDone((prev) => !prev);
  };

  return (
    <li className={clsx(classes.todoItem, done && 'done')}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              color='secondary'
              checked={done}
              onChange={handleDoneStatus}
            />
          }
          label='Create a To-do list page'
        />
      </FormGroup>
      <p className={classes.todoDescr}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
        aspernatur. Illo, pariatur. Suscipit mollitia molestiae temporibus velit
        sequi quod accusantium, facilis natus nulla, reiciendis unde autem
        eligendi laboriosam repudiandae atque? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Non temporibus necessitatibus harum illum
        tempore voluptatum fuga fugiat iusto, ut dicta. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Consequatur iste at quidem
        reiciendis enim dolorum impedit mollitia, perspiciatis expedita natus.
      </p>
      <button className={classes.deleteBtn}>Delete</button>
    </li>
  );
};

export default TodoItem;
