import React from 'react';
import './Toolbar.css';
import logo from './logo.png'
import '../SideDrawer/DraweToggleButton';
import DrawerToggleButton from '../SideDrawer/DraweToggleButton';
import phoneimg from './phoneimg.png';
import visitus from './visitus.png';
import messenger from './messenger.png';
import zalo from './zalo.png';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li className><a href="/">Giới thiệu</a></li>
                    <li className><a href="/">Thư viện ảnh</a></li>
                    <li className><a href="/">Tin tức và sự kiện</a></li>
                    <li className="logo"><a href="/"><img src={logo} height="75" width="75" alt="Au My Logo" /></a></li>
                    <li className><a href="/"><img src={phoneimg} height="40" /></a></li>
                    <li className><a href="/"><img src={visitus} height="35" /></a></li>
                    <li className><a href="/"><img src={zalo} height="35" /></a><a href="/"><img src={messenger} height="35" /></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar