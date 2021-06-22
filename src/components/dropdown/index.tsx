import React, { FC } from 'react';
import { Menu, Dropdown, Button} from 'antd';
import { SortAscendingOutlined } from '@ant-design/icons';

interface IDropDownMenuProps {
    onClick: (order: string)=>void
}
const DropDownMenu: FC<IDropDownMenuProps> = ({onClick}) => {

    const menu = (
        <Menu>
            <Menu.Item onClick={() => onClick('assending')}>
                    Ascending Order 
            </Menu.Item>
            <Menu.Item onClick={() => onClick('descending')}>
                    Descending Order
            </Menu.Item>
        </Menu>

    )
    return (
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <Button icon={<SortAscendingOutlined/>} type="primary" size="large">Sort Memes</Button>
        </Dropdown>
    )
}

export default DropDownMenu
