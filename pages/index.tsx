import { Provider } from 'react-redux';
import { Layout } from '../components/Layout';
import Form from '../redux/containers/From';
import store from '../redux/store';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <Provider store={store}>
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
  </Provider>
);

export default Home;
