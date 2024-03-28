import { Line } from '@ant-design/charts';

import supabase from '@/services/supabase';

// import { Line } from "@ant-design/plots";
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const Diagram: React.FC = () => {
  const { data, error, loading } = useRequest(() => {
    // return supabase.from();
  });

  return (
    <Line
      data={data}
      height={400}
      xField="year"
      yField="value"
      point={{ shapeField: 'diamond', sizeField: 5 }}
      colorField="purple"
    />
  );
};

export default Diagram;
