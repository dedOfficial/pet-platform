import { Button, Flex, InputNumber } from 'antd';
import { useModel } from 'umi';

const Counter: React.FC = () => {
  const counter = useModel('counter', ({ increment, decrement, counter }) => ({
    add: increment,
    minus: decrement,
    counter,
  }));

  return (
    <Flex vertical gap={5}>
      <InputNumber value={counter.counter} readOnly />
      <Button.Group>
        <Button onClick={counter.add}>Add by 1</Button>
        <Button onClick={counter.minus}>Minus by 1</Button>
      </Button.Group>
    </Flex>
  );
};

export default Counter;
