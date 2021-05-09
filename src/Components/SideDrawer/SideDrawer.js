import React from 'react';
import './SideDrawer.css';
import logo from './logo.png';
import phone from './phone.png';
import locicon from './locicon.png';
import messenger from './messenger.png';
import zalo from './zalo.png';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return (
        <nav className={drawerClasses}>
            <ul>
            <li className><a href="/"><img src={logo} height="75" width="75" /></a></li>
            <br></br>
            <br></br>
            <li className><a href="/">Giới thiệu</a></li>
            <li className><a href="/">Thư viện ảnh</a></li>
            <li className><a href="/">Tin tức và sự kiện</a></li>
            <li className><a href="/"><img src={phone} height="20" />0982826763</a></li>
            <li className><a href="/"><img src={locicon} height="20"  />ĐC</a></li>
            <li className><a href="/"><img src={zalo} height="30" /></a><a href="/"><img src={messenger} height="30" /></a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer