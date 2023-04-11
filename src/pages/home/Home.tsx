import { FC } from 'react';

import classes from './Home.module.scss';

const Home: FC = () => {
  return (
    <section className={classes.inner}>
      <h1 className={classes.title}>
        The <span>best</span> app to organize your life!
      </h1>
    </section>
  );
};

export default Home;
