import { Layout } from '../components/Layout';
import Form from '../redux/containers/From';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Layout>
    <Form />
  </Layout>
);

export default Home;
