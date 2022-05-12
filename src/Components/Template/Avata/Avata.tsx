import React from 'react'
import { AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import avatar from "../../../Assets/Image/avata.png"
import { Input } from 'antd';


const { Search } = Input;
const Avata = () => {
    return (
        <div className='Layout__QuanLyVe-Top'>
            <div className='Layout__QuanLyVe-Top-Left'>
                <Search style={{ width: '437px', height: '50px' }} placeholder=" search " suffix={< AiOutlineSearch />} enterButton={null} />
            </div>
            <div className='Layout__QuanLyVe-Top-Right'>
                <div>
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

            </div>
            <div style={{ clear: 'both' }}></div>
        </div>

    )
}

export default Avata