import React, { useEffect, useState } from 'react'
import Avata from './../../Template/Avata/Avata';
import { AiOutlineSearch } from "react-icons/ai";
import { Table, Space, Input, Radio, DatePicker, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoiSoatVe } from '../../State/Action-Creators/DoiSoatVeCreators';
import { State } from '../../State';
import { DoiSoatVe } from '../../State/Actions/DoiSoatVeAction';
import { DoiSoatVeProps } from '../../../PropsComponent/DoiSoatVeProp';

const { Search } = Input;

//table
const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
    key: 'STTKey',

  },
  {
    title: 'Số vé',
    dataIndex: 'SoVe',
    key: 'SoVeKey',
  },
  {
    title: 'Ngày sử dụng',
    dataIndex: 'NgaySuDung',
    key: 'NgaySuDungKey',
  },
  {
    title: 'Tên loại vé',
    key: 'TenLoaiVeKey',
    dataIndex: 'TenLoaiVe',

  },
  {
    title: 'Cổng check - in',
    key: 'checkkey',
    dataIndex: 'check',
  },
  {
    title: '',
    key: 'ChuaDoiSoatKey',
    dataIndex: 'ChuaDoiSoat',
  },
];


const DoiSoatVeDS = ({name}: DoiSoatVeProps) => {
  // lấy danh sách đối soát từ firebase
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllDoiSoatVe());

  }, [])
  const { doiSoatVeList } = useSelector((state: State) => state.doiSoatVe)
  const data: DoiSoatVe[] = doiSoatVeList;

  //Radio 
  const [value, setValue] = React.useState('Tất cả');

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='Layout__DSV'>
      <Avata />
      <div className='Layout__DSV-CenterLeft'>
        <div className='Layout__DSV-CenterLeft-Text'>
          {name.doiSoat}
        </div>
        <div className='Layout__DSV-CenterLeft-Search'>
          <Search style={{ width: '437px', height: '50px' }} placeholder=" Tìm bằng số vé " suffix={< AiOutlineSearch />} enterButton={null} />
        </div>
        <div className='Layout__DSV-CenterLeft-CDS'>Chốt đối soát</div>
        <div style={{ clear: 'both' }} ></div>
        <div className='Layout__DSV-CenterLeft-Table'>
          <Table
            rowKey={`STT`} pagination={{ pageSize: 12 }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>

      {/* Right */}
      <div className='Layout__DSV-CenterRight'>
        <div className='Layout__DSV-CenterRight-LV'>
          {name.locVe}
        </div><br />
        <div className='Layout__DSV-CenterRight-TT'>Tình trạng đối soát</div>
        <div className='Layout__DSV-CenterRight-Radio'>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value='Tất cả'>Tất cả</Radio><br />
            <Radio value='Đã đối soát'>Đã đối soát</Radio><br />
            <Radio value='Chưa đối soát'>Chưa đối soát</Radio>
          </Radio.Group>
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className='Layout__DSV-CenterRight-LV1'>
          Loại vé
        </div>
        <div className='Layout__DSV-CenterRight-VC'>Vé cổng</div>
        <div style={{ clear: 'both' }}></div>
        <div className='Layout__DSV-CenterRight-TN'>
          Từ ngày
        </div>
        <div className='Layout__DSV-CenterRight-DatePicker'>
          <Space direction="vertical">
            <DatePicker
              onChange={onChange}
            // defaultValue={moment('11/2022', monthFormat)}
            // format={monthFormat}
            // open={true}
            // suffixIcon={< />}
            />
          </Space>
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className='Layout__DSV-CenterRight-DN'>
          Đến ngày
        </div>
        <div className='Layout__DSV-CenterRight-DatePickerDN'>
          <Space direction="vertical">
            <DatePicker
              onChange={onChange}
            // defaultValue={moment('11/2022', monthFormat)}
            // format={monthFormat}
            // open={true}
            // suffixIcon={< />}
            />
          </Space>
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className='Layout__DSV-CenterRight-Button'>
          <Button  >Lọc</Button>
        </div>
      </div>

      <div style={{ clear: 'both' }}></div>
    </div>
  )
}

export default DoiSoatVeDS