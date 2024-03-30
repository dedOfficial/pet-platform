import PageContainer from '../components/PageContainer';
import '../styles/tailwind.css';
import {useTranslation} from "react-i18next";
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    street: string;
    building: string;
    number: number;
    companyAddress: string;
    companyName: string;
    gender: string;
  }
  
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      fixed: 'left',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value.toString()) === 0,
    },
    {
      title: 'Other',
      children: [
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 150,
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Address',
          children: [
            {
              title: 'Street',
              dataIndex: 'street',
              key: 'street',
              width: 150,
            },
            {
              title: 'Block',
              children: [
                {
                  title: 'Building',
                  dataIndex: 'building',
                  key: 'building',
                  width: 100,
                },
                {
                  title: 'Door No.',
                  dataIndex: 'number',
                  key: 'number',
                  width: 100,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Company',
      children: [
        {
          title: 'Company Address',
          dataIndex: 'companyAddress',
          key: 'companyAddress',
          width: 200,
        },
        {
          title: 'Company Name',
          dataIndex: 'companyName',
          key: 'companyName',
          width: 200
        },
      ],
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 80,
      fixed: 'right',
    },
  ];
  
const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M',
    });
  }

function Home() {
    const { t } = useTranslation();

    return (
        <PageContainer title={t('welcome')}>
            <div className="h-full">
                <Table
                    columns={columns}
                    dataSource={data}
                    size="small"
                    scroll={{ scrollToFirstRowOnChange: true, y: 600 }}
                    pagination={{defaultPageSize: 50}}
                    virtual
                    bordered
                />
            </div>
        </PageContainer>
    );
}

export default Home;
