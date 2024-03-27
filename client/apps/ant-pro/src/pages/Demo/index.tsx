import { useModel } from 'umi';

const DemoPage: React.FC = () => {
  const message = useModel('demo');

  return <div>{message}</div>;
};

export default DemoPage;
