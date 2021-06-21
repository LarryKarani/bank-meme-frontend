import React, {FC, ChangeEvent} from 'react';
import {Input} from 'antd';

interface IInputBox {
    placeholder: string;
    onchange: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name: string
}

const GenerateMeme: FC<IInputBox> = (InputBox) => {
    const {placeholder, onchange, name} = InputBox
    return (
        <Input placeholder={placeholder} onChange={onchange} name={name}/>
    )
}

export default GenerateMeme