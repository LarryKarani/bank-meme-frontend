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
                <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option </Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default NavBar
