import classNames from 'classnames';

interface Props {
  grid?: boolean;
  className?: string;
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<Props> = ({ grid, children, className = '' }) => (
  <div
    className={classNames({
      'grid grid-cols-6 md:grid-cols-12 gap-x-6': grid,
      'mx-auto max-w-screen-xl relative': true,
      [className]: true,
    })}
  >
    {children}
  </div>
);

export default Container;
