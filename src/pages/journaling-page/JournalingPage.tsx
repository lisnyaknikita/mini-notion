import { FC, useState } from 'react';
import ReactQuill from 'react-quill';

import { useAppSelector } from '../../hooks/reduxHooks';

import clsx from 'clsx';

import { modules } from '../note-page/Editor.modules';

import classes from './JournalingPage.module.scss';

const JournalingPage: FC = () => {
  const isNavOpen = useAppSelector((state) => state.navigation.isNavOpen);

  const [value, setValue] = useState(
    '<h1 class="ql-align-center">On this page you can write everything about yourself, about your problems or something like that. This page will not save your thoughts after reload.</h1>'
  );

  return (
    <div className={classes.inner}>
      <div className={classes.journalingBg}>
        <img
          src='https://www.createwritenow.com/hubfs/images/pillar/woman-journaling-with-coffee.png'
          alt='note background'
        />
      </div>
      <h2 className={classes.title}>Journaling</h2>
      <div className={clsx(classes.journaling, !isNavOpen && 'full')}>
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
