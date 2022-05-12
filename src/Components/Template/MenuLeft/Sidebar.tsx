import React from 'react'
import type { MenuProps } from 'antd';
import { Menu, Switch, Divider } from 'antd';
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { AiOutlineContainer } from "react-icons/ai";
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import '../../Style/index.scss';
import logo from '../../../Assets/Image/logo.png';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to={'/'} >Trang chủ</Link>, '1', <BiHomeAlt style={{ fontSize: '21px' }} />),
    getItem(<Link to={'/quanlyve'} >Quản lý vé</Link>, '2', <HiOutlineTicket style={{ fontSize: '21px', transform: 'rotate(180deg)' }} />),
    getItem(<Link to={'/doisoatve'} >Đổi soát vé</Link>, '3', <AiOutlineContainer style={{ fontSize: '21px' }} />),
    getItem(<span style={{ color: '#1E0D03', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', lineHeight: '26px' }}>Cài đặt</span>, 'sub1', <SettingOutlined style={{ fontSize: '21px' }} />, [
        getItem(<Link to={'/goidichvu'} style={{ paddingLeft: '26px' }} >Gói dịch vụ</Link>, '4')]),

];
const Sidebar = () => {
    const [mode, setMode] = React.useState<'inline'>('inline');
    const [theme, setTheme] = React.useState<'dark'>('dark');




    return (
        <div>
            <div className='Layout__Sidebar' style={{ float:'left' }}>
                <div className='Layout__Sidebar-logo'>
                    <img src={logo} alt="" />
                </div>
                <Menu
                    style={{ width: 256, height: 572, background: '#F9F6F4' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                    items={items}
                />
                <div style={{ marginTop:'333px', fontFamily: 'Montserrat',fontStyle:'normal',fontWeight:'400px',fontSize:'14px' }}>
                    Copyright @ 2020 Alta Software
                </div>
            </div>
            <div style={{ paddingLeft:'321px' }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar