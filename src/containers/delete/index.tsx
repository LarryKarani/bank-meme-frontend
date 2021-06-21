import React, { FC, useContext } from 'react';
import { ICustomMeme } from '../../interface';
import { Popconfirm } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import { deleteCustomMemeService } from '../../services';
import { Context as MemeContext } from '../../context';

interface IMemeProps {
    meme: ICustomMeme;
}

const Delete: FC<IMemeProps> = ({ meme, children }) => {
    const { dispatch, state } = useContext(MemeContext);
    const notify = () => toast.success('Meme deleted successfully');

    const confirm = () => {
        deleteCustomMemeService(dispatch, state, meme);
        notify()
    }

    const cancel = () => {
        console.log('cancel')
    }

    return (

        <Popconfirm
            title="Are you sure you want to delete this meme?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            {children}
        </Popconfirm>


    )
}

export default Delete
