import { FC, useState } from 'react';

import classes from './JournalingPage.module.scss';
import ReactQuill from 'react-quill';

const JournalingPage: FC = () => {
  const [value, setValue] = useState(
    '<h1 class="ql-align-center">On this page you can write everything about yourself, about your problems or something like that. This page will not save your thoughts after reload.</h1>'
  );

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ direction: 'rtl' }],
      [{ align: [] }],
    ],
  };

  return (
    <div className={classes.inner}>
      <div className={classes.journalingBg}>
        <img
          src='https://www.createwritenow.com/hubfs/images/pillar/woman-journaling-with-coffee.png'
          alt='note background'
        />
      </div>
      <h2 className={classes.title}>Journaling</h2>
      <div className={classes.journaling}>
        <div className={classes.journalingEditor}>
          <ReactQuill
            theme='snow'
            modules={modules}
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
};

export default JournalingPage;
