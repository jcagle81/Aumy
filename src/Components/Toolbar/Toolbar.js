import React from 'react';
import './Toolbar.css';
import logo from './logo.png'
import '../SideDrawer/DraweToggleButton';
import DrawerToggleButton from '../SideDrawer/DraweToggleButton';
import phoneimg from './phoneimg.png';
import visitus from './visitus.png';
import messenger from './messenger.png';
import zalo from './zalo.png';
import { Link } from 'react-router-dom';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li className><Link to={'/AboutUs'}>Giới thiệu</Link></li>
                    <li className><Link to={'/News'}>Thư viện ảnh</Link></li>
                    <li className><Link to={'/Album'}>Tin tức và sự kiện</Link></li>
                    <li className="logo"><Link to="/"><img src={logo} height="75" width="75" alt="Au My Logo" /></Link></li>
                    <li className><Link to="/"><img src={phoneimg} height="40" /></Link></li>
                    <li className><Link to="/"><img src={visitus} height="35" /></Link></li>
                    <li className><Link to="/"><img src={zalo} height="35" /></Link><Link to="/"><img src={messenger} height="35" /></Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar