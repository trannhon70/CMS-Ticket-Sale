import React from 'react'
import { Input } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import Avata from '../../Template/Avata/Avata';
import '../../Style/index.scss';
import vector from '../../../Assets/Image/Vector.png';
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const { Search } = Input;
const QuanLyVe = () => {
  return (
    <div className='Layout__QuanLyVe'>
      <Avata />
      <div className='Layout__QuanLyVe-Center'>
        <div className='Layout__QuanLyVe-Center-DanhSach'>Danh sách vé</div>
        <div className='Layout__QuanLyVe-Center-Search'>
          <Search style={{ width: '437px', height: '50px' }} placeholder=" search " suffix={< AiOutlineSearch />} enterButton={null} />
        </div>

        <div className='Layout__QuanLyVe-Center-LocVe'>
          <img src={vector} alt="" style={{ marginRight: '5px' }} /> Lọc vé
        </div>

        <div className='Layout__QuanLyVe-Center-File'>
          Xuất file (.csv)
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className='Layout__QuanLyVe-Center-Table'>
          <Table columns={columns} dataSource={data} style={{ height: '400px' , marginTop:'-500px'}} />
        </div>
      </div>
    </div>
  )
}

export default QuanLyVe