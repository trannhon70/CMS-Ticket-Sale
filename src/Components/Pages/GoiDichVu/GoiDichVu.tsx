import { Input, Table, Modal, Button, Form, Space, DatePicker, TimePicker, Checkbox, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { Link } from 'react-router-dom';
import avatar from "../../../Assets/Image/avata.png";
import { AiOutlineForm } from "react-icons/ai";
import mauDo from "../../../Assets/Image/do.png";
import xanh from "../../../Assets/Image/xanh.png";
import sao from "../../../Assets/Image/sao.png";
import { CSVLink, CSVDownload } from "react-csv";
import { useDispatch, useSelector } from 'react-redux';
import { getAllGoiDichVu } from '../../State/Action-Creators/GoiDichVuCreators';
import { State } from '../../State';
import { GoiDichVu } from '../../State/Actions/GoiDichVuAction';
import { GoiDichVuProps } from '../../../PropsComponent/GoiDichVuProp';

const { Search } = Input;
const { Option } = Select;



const DanhSachGoiDichVu = ({name}: GoiDichVuProps) => {
  //lấy dữ liệu từ firebase 
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getAllGoiDichVu())
  },[])
  const {goiDichVuList} = useSelector((state: State)=> state.goidichvu);
  const data:GoiDichVu[] = goiDichVuList
  //modal Thêm gói vé
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

  //modal cập nhật gói vé 
  const [capNhat, setCapNhat] = useState(false);
  const showModalCapNhat = () => {
    setCapNhat(true);
  }
  const handleOKCapNhat = () => {
    setCapNhat(false);
  }
  const handelCancelCapNhat = () => {
    setCapNhat(false)
  }
  //table
  const columns = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STTKey',

    },
    {
      title: 'Mã gói',
      dataIndex: 'MaGoi',
      key: 'MaGoiKey',
    },
    {
      title: 'Tên gói vé',
      dataIndex: 'TenGoiVe',
      key: 'TenGoiVeKey',
    },
    {
      title: 'Ngày áp dụng',
      dataIndex: 'NgayApDung',
      key: 'NgayApDungKey',
    },
    {
      title: 'Ngày hết hạn',
      dataIndex: 'NgayHetHan',
      key: 'NgayHetHankey',
    },
    {
      title: 'Giá vé (VNĐ/vé)',
      dataIndex: 'GiaVe',
      key: 'GiaVeKey',

    },
    {
      title: 'Giá Combo (VNĐ/Combo)',
      dataIndex: 'GiaVeCB',
      key: 'GiaVeCBKey',

    },
    {
      title: 'Tình trạng',
      dataIndex: 'TinhTrang',
      key: 'TinhTrangKey',
      render: (TinhTrang: any) => {
        if (TinhTrang === 'Đang áp dụng') {
          return (
            <div style={{ width: '129px', height: '31px', background: '#DEF7E0', border: '1px solid #03AC00', borderRadius: '4px', textAlign: 'center', color: '#03AC00', lineHeight: '28px' }} > <img src={xanh} style={{ marginRight: '8px' }} /> {TinhTrang} </div>
          )
        }
        else if (TinhTrang === 'Tắt') {
          return (
            <div style={{ width: '59px', height: '31px', background: '#F8EBE8', border: '1px solid #FD5959', borderRadius: '4px', textAlign: 'center', color: '#FD5959', lineHeight: '28px' }} > <img src={mauDo} style={{ marginRight: '8px' }} /> {TinhTrang} </div>
          )
        }
      }

    },
    {
      title: '',
      dataIndex: 'STT',
      key: 'GiaVeCBKey',
      render: (STT: any) => <div onClick={showModalCapNhat} style={{ color: '#FF993C', cursor: 'pointer' }}> < AiOutlineForm style={{ color: '#FF993C', fontSize: '16px' }} /> <span style={{ fontSize: '16px' }}>Cập nhật</span> </div>
    },

  ];

  
  return (
    <div className='Layout__GDV'>
      <div className='Layout__GDV-Header'>
        <div style={{ float: 'right', textAlign: 'end', paddingLeft: '25px' }}>
          <img src={avatar} style={{ width: '48px', height: '48px' }} alt="" />
        </div>
        <div style={{ float: 'right', textAlign: 'end', paddingLeft: '25px', marginTop: '10px' }}>
          <AiOutlineMail style={{ fontSize: '30px' }} />
        </div>
        <div style={{ float: 'right', textAlign: 'end', marginTop: '10px' }}>
          <BiBell style={{ fontSize: '30px' }} />
        </div>
      </div>
      <div className='Layout__GDV-Center'>
        <div className='Layout__GDV-Center-DSGV'>{name.danhSach}</div>
        <div className='Layout__GDV-Center-Search'>
          <Search style={{ width: '437px', height: '50px' }} placeholder=" Tìm bằng số vé " suffix={< AiOutlineSearch />} enterButton={null} />
        </div>
        <CSVLink data={data} >
          <div className='Layout__GDV-Center-XF'>
            Xuất file (.csv)
          </div>
        </CSVLink>
        <div onClick={showModal} className="Layout__GDV-Center-TGV">
          Thêm gói vé
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className='Layout__GDV-Center-Table' >
          <Table
            rowKey={`STT`} pagination={{ pageSize: 12 }}
            columns={columns}
            dataSource={data} />
        </div>
      </div>
      {/* Modal thêm dịc vụ */}
      <Modal footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <div className='Modal__ThemGV'>Thêm gói vé</div>
          <div className='Modal__TenGV'>Tên gói vé <img src={sao} /> </div>
          <div className='Modal__Input'>
            <Input placeholder="nhập tên gói vé" />
          </div>
          <div className='Modal__NAD'>
            <div className='Modal__NAD-Text'>Ngày áp dụng</div>
            <div className='Modal__NAD-DateTime'>
              <Space>
                <DatePicker placeholder='dd/MM/YYYY' />
                <TimePicker placeholder='hh:mm:ss' />
              </Space>
            </div>
          </div>
          {/* Right */}
          <div className='Modal__NHH'>
            <div className='Modal__NHH-Text'>Ngày hết hạn</div>
            <div className='Modal__NHH-DateTime'>
              <Space>
                <DatePicker placeholder='dd/MM/YYYY' />
                <TimePicker placeholder='hh:mm:ss' />
              </Space>
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
          <div className='Modal__GVAD'>
            Giá vé áp dụng
          </div>
          <Checkbox >Vé lẻ (vnđ/vé) với giá</Checkbox>
          <Input placeholder='Giá vé' style={{ marginLeft: '8px', width: '148px', height: '40px', borderRadius: '8px', background: '#F1F4F8' }} />
          <strong>/vé</strong>
          <div style={{ clear: 'both', marginBottom: '32px' }}></div>
          <Checkbox >Combo vé với giá </Checkbox>
          <Input placeholder='Giá vé' style={{ marginLeft: '8px', width: '148px', height: '40px', borderRadius: '8px', background: '#F1F4F8' }} />
          <strong>/</strong>
          <Input placeholder='Giá vé' style={{ marginLeft: '8px', width: '72px', height: '40px', borderRadius: '8px', background: '#F1F4F8' }} />
          <strong>vé</strong>
          <div style={{ clear: 'both' }}></div>
          <div className='Modal__TinhTrang'>Tình trạng</div>
          <Select defaultValue="Đang áp dụng" style={{ width: '22%' }}>
            <Option value="Đang áp dụng">Đang áp dụng</Option>
            <Option value="Tắt">Tắt</Option>
          </Select>
          <div className='Modal__TTBB' ><img src={sao} style={{ marginRight: '4px' }} />là thông tin bắt buộc</div>
          <div className='Modal__Button'>
            <Button className='Modal__Button-Huy' >Hủy</Button>
            <Button className='Modal__Button-Luu' >Lưu</Button>
          </div>
        </Form>
      </Modal>

      {/* Modal cập nhật */}
      <Modal footer={null} visible={capNhat} onOk={handleOKCapNhat} onCancel={handelCancelCapNhat}>
        <Form>
          <div className='Modal__ThemGV'>Cập nhật thông tin gói vé</div>
          <div style={{ float: 'left' }}>
            <div className='Modal__TenGV'>Tên gói vé <img src={sao} /> </div>
            <div className='Modal__Input1' style={{ width: '250px' }}>
              <Input placeholder="PKJKSAKD" style={{ borderRadius:'8px' }}/>
            </div>
          </div>
          <div style={{ float: 'left' , marginLeft:'86px' }}>
            <div className='Modal__TenGV'>Tên sự kiện </div>
            <div className='Modal__Input2' style={{ width: '370px' }} >
              <Input placeholder="Hội chợ triển lãm hàng tiêu dùng 2021" style={{ borderRadius:'8px' }} />
            </div>
          </div>
          <div style={{ clear:'both' }}></div>
          <div className='Modal__NAD'>
            <div className='Modal__NAD-Text'>Ngày áp dụng</div>
            <div className='Modal__NAD-DateTime'>
              <Space>
                <DatePicker placeholder='dd/MM/YYYY' />
                <TimePicker placeholder='hh:mm:ss' />
              </Space>
            </div>
          </div>
          {/* Right */}
          <div className='Modal__NHH'>
            <div className='Modal__NHH-Text'>Ngày hết hạn</div>
            <div className='Modal__NHH-DateTime'>
              <Space>
                <DatePicker placeholder='dd/MM/YYYY' />
                <TimePicker placeholder='hh:mm:ss' />
              </Space>
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
          <div className='Modal__GVAD'>
            Giá vé áp dụng
          </div>
          <Checkbox >Vé lẻ (vnđ/vé) với giá</Checkbox>
          <Input placeholder='Giá vé' style={{ marginLeft: '8px', width: '148px', height: '40px', borderRadius: '8px', background: '#F1F4F8' }} />
          <strong>/vé</strong>
          <div style={{ clear: 'both', marginBottom: '32px' }}></div>
          <Checkbox >Combo vé với giá </Checkbox>
          <Input placeholder='Giá vé' style={{ marginLeft: '8px', width: '148px', height: '40px', borderRadius: '8px', background: '#F1F4F8' }} />
          <strong>/</strong>
          <Input placeholder='Giá vé' style={{ marginLeft: '8px', width: '72px', height: '40px', borderRadius: '8px', background: '#F1F4F8' }} />
          <strong>vé</strong>
          <div style={{ clear: 'both' }}></div>
          <div className='Modal__TinhTrang'>Tình trạng</div>
          <Select defaultValue="Đang áp dụng" style={{ width: '22%' }}>
            <Option value="Đang áp dụng">Đang áp dụng</Option>
            <Option value="Tắt">Tắt</Option>
          </Select>
          <div className='Modal__TTBB' ><img src={sao} style={{ marginRight: '4px' }} />là thông tin bắt buộc</div>
          <div className='Modal__Button'>
            <Button className='Modal__Button-Huy' >Hủy</Button>
            <Button className='Modal__Button-Luu' >Lưu</Button>
          </div>
        </Form>
      </Modal>
    </div>

  )
}

export default DanhSachGoiDichVu
