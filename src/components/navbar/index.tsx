import React, { useState, ChangeEvent } from 'react';
import { Layout, Menu } from 'antd';


const { Header } = Layout;
const { SubMenu } = Menu;


const NavBar = () => {
    return (
        <Header>
            <Menu  mode="horizontal">
                <Menu.Item key="images">
                    <a href="http://localhost:3000/memes">
                        Meme images
                    </a>
                </Menu.Item>
                <Menu.Item key="memes">
                    <a href="http://localhost:3000/memes/fav-memes">
                        My customized memes
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default NavBar
