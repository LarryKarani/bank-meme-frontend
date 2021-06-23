import React,{FC} from 'react';
import {Button} from 'antd';
import { IMeme, ICustomMeme } from '../../interface';

interface IButton {
        text?: string;
        onclick?: () => void;
        meme?: IMeme;
        size?: string;
        loading?: boolean;
        customMeme?: ICustomMeme;
   
}

const Buttom: FC<IButton> = ({text, onclick}) => {
    return (
        <Button type="primary" onClick={onclick} data-testid="button">{text}</Button>
    )
}

export default Buttom
