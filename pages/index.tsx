import type { GetServerSideProps, NextPage } from 'next';
import Navbar from '../components/organisms/navbar';
import Filter from '../components/organisms/filter';
import Carrousel from '../components/organisms/carrousel';
import moviesApiCalls from '../service/moviesApiCalls';
import { recordType } from '../database/data';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await moviesApiCalls.getTop8();
  return {
    props: data
  };
};

const Home: NextPage<{data: recordType[]}> = ({data}) => {
  return (
    <>
      <Navbar />
      <Filter />
      <Carrousel cards={data} />

    </>
  );
};

export default Home;
