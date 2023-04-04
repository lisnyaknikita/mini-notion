import { FC } from 'react';

import classes from './Home.module.scss';
import { useGetNotesQuery } from '../../store/api/notes.api';

const Home: FC = () => {
  const { data, isLoading, isError } = useGetNotesQuery(null);
  console.log(data);

  return (
    <section className={classes.inner}>
      <h1 className={classes.title}>
        The <span>best</span> app to organize your life!
      </h1>
    </section>
  );
};

export default Home;
