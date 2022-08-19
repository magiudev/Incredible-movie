import type { NextPage } from 'next';
import Navbar from '../components/organisms/navbar';
import Filter from '../components/organisms/filter';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Filter />
    </>
  );
};

export default Home;
