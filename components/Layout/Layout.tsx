import { Container } from '../Container';

interface Props {
  children: JSX.Element | JSX.Element[];
  hasSideBar?: boolean;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Container>
      <div className="col-start-3 col-end-13">{children}</div>
    </Container>
  </div>
);

export default Layout;
