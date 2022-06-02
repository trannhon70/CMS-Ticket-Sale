import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import "../../Style/index.scss";
import { Input } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import Avata from '../../Template/Avata/Avata';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Pie } from '@ant-design/plots';
import { TrangChuProps } from '../../../PropsComponent/TrangChuProp';

function onChange(date: any, dateString: any) {
    console.log(date, dateString);
}
const { Search } = Input;
const monthFormat = 'MM/YYYY';
const { RangePicker } = DatePicker;
const DemoArea = () => {
    const data = [
        {
            "timePeriod": "Thứ 2",
            "value": 1
        },
        {
            "timePeriod": "Thứ 3",
            "value": 1.4
        },
        {
            "timePeriod": "Thứ 4",
            "value": 2
        },
        {
            "timePeriod": "Thứ 5",
            "value": 2.26
        },
        {
            "timePeriod": "Thứ 6",
            "value": 3.34
        },
        {
            "timePeriod": "Thứ 7",
            "value": 2.41
        },
        {
            "timePeriod": "CN",
            "value": 1.52
        },
    
    ];

    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
        line: {
            color: '#FF993C',
            size: 2,
            height: 400,
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:rgb(255 153 60 / 79%) 1:#FF993C',
                height: 300,
            };
        },
    };

    return <Area {...config} />;
};

const GoiGiaDinh:any = () => {
    const data = [
        {
            type: '.',
            value: 13568,
        },
        {
            type: '',
            value: 56024,
        },

    ];
    const config = {
        appendPadding: 1,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '',
            },
        },
        color: ['#FF8A48', '#4F75FF', '#000000'],
    }

    return <Pie {...config} />;
};

const GoiSuKien:any = () => {
    const data = [
        {
            type: '.',
            value: 28302,
        },
        {
            type: '',
            value: 30256,
        },

    ];
    const config = {
        appendPadding: 1,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '',
            },
        },
        color: ['#FF8A48', '#4F75FF', '#000000'],
    }

    return <Pie {...config} />;
};
const TrangChu = ({name}: TrangChuProps) => {

    return (
        <div className='Layout__TrangChu'>
             <Avata />

            <div className='Layout__TrangChu-Center' >
                <div className='Layout__TrangChu-Center-Thongke' style={{ color: '#FF993C' }}>
                    {name.title}
                </div>
                <div className='Layout__TrangChu-Center-DoanhThu'>
                    Doanh thu
                </div>
                <div className='Layout__TrangChu-Center-DatePicker'>
                    <Space direction="vertical">
                        <DatePicker
                            onChange={onChange}
                            defaultValue={moment('11/2022', monthFormat)}
                            format={monthFormat}
                        // open={true}
                        // suffixIcon={< />}
                        />
                    </Space>
                </div>
                <div style={{ clear: 'both' }}></div>
                <div className='Layout__TrangChu-Center-Area' >
                    <DemoArea />
                </div>
                <div className='Layout__TrangChu-Center-DoanhSo'>
                    Tổng doanh số theo tuần
                </div>
                <div className='Layout__TrangChu-Center-So'>
                    525.145.000 <strong>đồng</strong>
                </div>
                <div className='Layout__TrangChu-Center-Bottom'>
                    <div className='Layout__TrangChu-Center-Bottom-DatePicker'>
                        <Space direction="vertical">
                            <DatePicker
                                onChange={onChange}
                                defaultValue={moment('11/2022', monthFormat)}
                                format={monthFormat}
                            // open={true}
                            // suffixIcon={< />}
                            />
                        </Space>
                    </div>
                    <div className='Layout__TrangChu-Center-Bottom-GGD'>
                        <div className='Layout__TrangChu-Center-Bottom-GGD-Text'>Gói gia đình</div>
                        <div className='Layout__TrangChu-Center-Bottom-GGD-DemoPie'>
                            <GoiGiaDinh   />
                        </div>
                    </div>
                    <div className='Layout__TrangChu-Center-Bottom-GSK'>
                        <div className='Layout__TrangChu-Center-Bottom-GSK-Text'>Gói sự kiện</div>
                        <div className='Layout__TrangChu-Center-Bottom-GSK-DemoPie'>
                            <GoiSuKien />
                        </div>
                    </div>
                    <div className='Layout__TrangChu-Center-Bottom-Ve'>
                        <div className='Layout__TrangChu-Center-Bottom-Ve-Text' ></div>
                        <div className='Layout__TrangChu-Center-Bottom-Ve-Text1'>Vé đã sử dụng</div>
                        <div className='Layout__TrangChu-Center-Bottom-Ve-Text2'></div>
                        <div className='Layout__TrangChu-Center-Bottom-Ve-Text3'>Vé chưa sử dụng</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrangChu
