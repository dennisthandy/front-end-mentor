import type { GetServerSideProps, NextPage } from 'next';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { server } from '../config';
import { Challenge } from '../utils/types';

type Props = {
  data: Challenge[]
}

const Home: NextPage<Props> = ({ data }) => (
  <Layout>
    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
      {data.map((item, index) => <Card key={index} {...item} />)}
    </div>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res: any = await fetch(`${server}/api/challenges`);
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
