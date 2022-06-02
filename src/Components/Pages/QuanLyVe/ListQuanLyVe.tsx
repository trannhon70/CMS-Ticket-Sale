import React, { useEffect, useState } from 'react';
import { Input, DatePicker } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import Avata from '../../Template/Avata/Avata';
import '../../Style/index.scss';
import vector from '../../../Assets/Image/Vector.png';
import { Table, Tag, Space, Radio } from 'antd';
import { render } from '@testing-library/react';
import tim from '../../../Assets/Image/tim.png';
import xanh from '../../../Assets/Image/xanh.png';
import maudo from '../../../Assets/Image/do.png';
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from 'moment';
import { Modal, Button } from 'antd';
import { Checkbox } from 'antd';
import { CSVLink, CSVDownload } from "react-csv";
import { useDispatch, useSelector } from 'react-redux';

import {  QuanLyVe } from '../../State/Actions/QuanLyVeAction';
import { State } from '../../State';
import { getAllQuanLyVe } from '../../State/Action-Creators/QuanLyVeCreators';
import { QuanLyVeProps } from '../../../PropsComponent/QuanLyVeProp';



//check box
function onChange1(checkedValues: any) {
  console.log('checked = ', checkedValues);
}


const options = [
  { label: 'Tất cả', value: 'Tất cả' },
  { label: 'Cổng 1', value: 'Cổng 1' },
  { label: 'Cổng 2', value: 'Cổng 2' },
  { label: 'Cổng 3', value: 'Cổng 3' },
  { label: 'Cổng 4', value: 'Cổng 4' },
  { label: 'Cổng 5', value: 'Cổng 5' },
];

///

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

const monthFormat = 'dd/MM/YYYY';
const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
    key: 'STT',

    //render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Booking code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Số vé',
    dataIndex: 'SoVe',
    key: 'SoVe',
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'TinhTrang',
    dataIndex: 'TinhTrang',
    render: (TinhTrang: any) => {
      if (TinhTrang === 'Đã sử dụng') {
        return (
          <div style={{ border: '1px solid #919DBA', borderRadius: '4px', background: '#EAF1F8', color: '#919DBA', width: '111px', height: '31px', padding: '4px 12px', fontSize: '12px', fontWeight: '500' }}>
            <img src={tim} style={{ marginRight: '8px' }} alt="" /> Đã sử dụng
          </div>
        )
      }
      else if (TinhTrang === 'Chưa sử dụng') {
        return (
          <div style={{ border: '1px solid #03AC00', borderRadius: '4px', background: '#DEF7E0', color: '#03AC00', width: '126px', height: '31px', padding: '4px 12px', fontSize: '12px', fontWeight: '500' }}>
            <img src={xanh} style={{ marginRight: '8px' }} alt="" /> Chưa sử dụng
          </div>
        )
      }
      else if (TinhTrang === 'Hết hạn') {
        return (
          <div style={{ border: '1px solid #FD5959', borderRadius: '4px', background: '#F8EBE8', color: '#FD5959', width: '89px', height: '31px', padding: '4px 12px', fontSize: '12px', fontWeight: '500' }}>
            <img src={maudo} style={{ marginRight: '8px' }} alt="" /> Hết hạn
          </div>
        )
      }
    }
  },
  {
    title: 'Ngày sử dụng',
    key: 'NgaySuDung',
    dataIndex: 'NgaySuDung',
  },
  {
    title: 'Ngày xuất vé',
    key: 'NgayXuatVe',
    dataIndex: 'NgayXuatVe',

  },
  {
    title: 'Cổng check-in',
    key: 'getCheck',
    dataIndex: 'check',

    render: (getCheck: any, record: any) => {
      if (record.TinhTrang === 'Đã sử dụng') {
        return (
          <div>{getCheck}</div>
        )
      }
      else if (record.TinhTrang === 'Chưa sử dụng') {
        return (
          <div style={{ marginLeft: '10px', fontSize: '18px' }}>- <strong style={{ marginLeft: '122px' }}>< BsThreeDotsVertical /></strong></div>
        )
      }
      else if (record.TinhTrang === 'Hết hạn') {
        return (
          <div style={{ marginLeft: '10px', fontSize: '18px' }}>- </div>
        )
      }
    }

  },
];


//truyền props


const { Search } = Input;
const ListQuanLyVe = ({name}:QuanLyVeProps) => {

  //lấy dữ liệu từ firebase
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllQuanLyVe())
  },[])
  const {quanLyVeList} = useSelector((state: State) => state.QuanLyVe)
  const data:QuanLyVe [] = quanLyVeList
  //modal radio
  const [value, setValue] = React.useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  ///modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className='Layout__QuanLyVe'>
      <Avata />
      <div className='Layout__QuanLyVe-Center'>
        <div className='Layout__QuanLyVe-Center-DanhSach'>{name.danhSach}</div>
        <div className='Layout__QuanLyVe-Center-Search'>
          <Search style={{ width: '437px', height: '50px' }} placeholder=" Tìm bằng số vé " suffix={< AiOutlineSearch />} enterButton={null} />
        </div>

        <div className='Layout__QuanLyVe-Center-LocVe' onClick={showModal}>
          <img src={vector} alt="" style={{ marginRight: '5px' }} /> Lọc vé
        </div>
        <CSVLink data={data}>
        <div className='Layout__QuanLyVe-Center-File'>
          Xuất file (.csv)
        </div>
        </CSVLink>
        <div style={{ clear: 'both' }}></div>
        <div className='Layout__QuanLyVe-Center-Table'>
          <Table
            rowKey={`STT`} pagination={{ pageSize: 10 }}
            columns={columns}
            dataSource={data}
            style={{ height: '400px', marginTop: '-500px' }} />
        </div>
      </div>

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}

      >
        <div className='Layout__QuanLyVe-SDV'>Lọc vé </div>
        <div className='Layout__QuanLyVe-Date'>
          <div className='Layout__QuanLyVe-Date-left'>
            <div className='Layout__QuanLyVe-Date-left-Text'> Từ ngày</div>
            <div className='Layout__QuanLyVe-Date-left-DatePicker'>
              <Space direction="vertical">
                <DatePicker
                  onChange={onChange}

                //format={monthFormat}
                //open={true}
                // suffixIcon={< />}
                />
              </Space>
            </div>
          </div>
          <div className='Layout__QuanLyVe-Date-Right'>
            <div className='Layout__QuanLyVe-Date-Right-Text'>Đến ngày</div>
            <div className='Layout__QuanLyVe-Date-Right-DatePicker'>
              <Space direction="vertical">
                <DatePicker
                  onChange={onChange}
                // defaultValue={moment('11/2022', monthFormat)}
                //format={monthFormat}
                // open={true}
                // suffixIcon={< />}
                />
              </Space>
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
        <div className='Layout__QuanLyVe-Radio'>
          <div className='Layout__QuanLyVe-Radio-Text'>
            Tình trạng sử dụng
          </div>
          <div className='Layout__QuanLyVe-Radio-1'>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Tất cả</Radio>
              <Radio value={2}>Đã sử dụng</Radio>
              <Radio value={3}>Chưa sử dụng</Radio>
              <Radio value={4}>Hết hạn</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className='Layout__QuanLyVe-Check'>
          <div className='Layout__QuanLyVe-Check-Text'>Cổng Check - in</div>
          <div className='Layout__QuanLyVe-Check-In'>
            <Checkbox.Group options={options} defaultValue={['Cổng 1']} onChange={onChange1} />
          </div>
        </div>
        <div className='Layout__QuanLyVe-LocVe'>
        <Button >Lọc</Button>
        </div>

      </Modal>

    </div>
  )
}

export default ListQuanLyVe

