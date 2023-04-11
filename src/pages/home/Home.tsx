import { FC, useContext } from 'react';

import classes from './Home.module.scss';

import { ThemeContext } from '../../providers/ThemeContext';

import clsx from 'clsx';

const Home: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={clsx(classes.inner, !darkMode && 'light')}>
      <h1 className={clsx(classes.title, !darkMode && 'light')}>
        The <span>best</span> app to organize your life!
      </h1>
    </section>
  );
};

export default Home;
