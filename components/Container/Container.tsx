interface Props {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<Props> = ({ children }) => (
  <div className="relative mx-auto grid max-w-screen-xl grid-cols-6 gap-x-6 md:grid-cols-12">
    {children}
  </div>
);

export default Container;
