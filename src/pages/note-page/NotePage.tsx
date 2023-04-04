import { FC } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import classes from './NotePage.module.scss';

const NotePage: FC = () => {
  return (
    <div className={classes.inner}>
      <div className={classes.noteBg}>
        <img src='' alt='note background' />
      </div>
      <h2 className={classes.noteTitle}>The title</h2>
      <div className={classes.noteEditor}>
        {/*value={value} onChange={setValue} */}
        <ReactQuill theme='snow' />
      </div>
    </div>
  );
};

export default NotePage;
