import React from 'react'
import Avata from './../../Template/Avata/Avata';
import { AiOutlineSearch } from "react-icons/ai";
import { Table, Tag, Space, Input, Radio, DatePicker, Button } from 'antd';

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

const data = [
  {
    STT: '1',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '2',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '3',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '4',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '5',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '6',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },

  {
    STT: '7',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '8',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '9',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '10',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '11',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '12',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '13',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },
  {
    STT: '14',
    SoVe: 'SADSADSAFAS',
    NgaySuDung: '14/04/2021',
    TenLoaiVe: 'Vé cổng',
    check: 'cổng 1',
    ChuaDoiSoat: 'Chưa đối soát'
  },

];
const DoiSoatVe = () => {
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
          Đối soát vé
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
            dataSource={data} />
        </div>
      </div>

      {/* Right */}
      <div className='Layout__DSV-CenterRight'>
        <div className='Layout__DSV-CenterRight-LV'>
          Lọc vé
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

export default DoiSoatVe