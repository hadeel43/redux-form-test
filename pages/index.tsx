import { Layout } from '../components/Layout';
import Form from '../redux/containers/From';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Layout>
    <Form
      page={{
        currentPage: 0,
      }}
      submitAndContinue={(input) => console.log(input)}
      errors={{
        name: '',
        age: '',
      }}
      values={{
        name: '',
        age: '',
      }}
    />
  </Layout>
);

export default Home;
