import React, { FC, useContext, useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { Context as MemeContext } from '../../../context';
import { ClipLoader } from 'react-spinners';
import { getCustomMemes, searchCustomMeme } from '../../../services';
import { Image } from 'antd';
import { Card, Modal } from 'antd';
import { ICustomMeme } from '../../../interface';
import { ToastContainer } from 'react-toastify';
import { Button } from 'antd';
import UpdateMeme from '../../editCustomMeme';
import Delete from '../../delete';
import { getMyCustomMemes } from '../../../actions/MemeActions';
import './style.scss';
import DropDownMenu from '../../../components/dropdown';
import { Input } from 'antd';

const { Search } = Input;

const FavMemes: FC = () => {
    const {
        state: { myCustomMemes, isLoading },
        dispatch,
        state
    } = useContext(MemeContext)

    useEffect(() => {
        getCustomMemes(dispatch, state)
    }, [])

    const dummyMeme = { _id: 'string', caption: 'string', tag: 'string', image: 'string' };
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [meme, setMeme] = useState<ICustomMeme>(dummyMeme);
    const [deleteModal, setDelete] = useState<boolean>(false);

    const handleCloseModal = (): void => {
        setOpenModal(false)
    };

    const onclick = (meme: ICustomMeme): void => {
        setMeme(meme)
        setOpenModal(true)
    }

    const deleteMeme = (meme: ICustomMeme): void => {
        setMeme(meme)
        setDelete(true)
    }

    const sortByCaption = (order: string): void => {

        const ascendingSortedmemes = (order === 'assending') ?
            myCustomMemes.sort((a, b) => (a.caption > b.caption) ? 1 : (a.caption === b.caption) ? ((a.tag > b.tag) ? 1 : -1) : -1)
            : myCustomMemes.sort((a, b) => (a.caption > b.caption) ? -1 : (a.caption === b.caption) ? ((a.tag > b.tag) ? -1 : 1) : 1)
        dispatch(getMyCustomMemes(ascendingSortedmemes))
    }

    const onSearch = (value: string): void => {
        searchCustomMeme(dispatch, state, value)
    }

    return (
        <div>
            <div className="drop-down-search-fav-memes">
                <DropDownMenu onClick={(order) => sortByCaption(order)} />
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />

            </div>
            <div className="meme-container">
                <ToastContainer />
                <Modal visible={openModal} onCancel={handleCloseModal} footer={null}>
                    <UpdateMeme meme={meme} />
                </Modal>
                {


                    (!isLoading && myCustomMemes.length > 0) ? myCustomMemes.map((meme) => (
                        <div className="fav-meme-wrapper">
                            <Card title={meme.caption}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={meme.image}
                                />
                            </Card>
                            <Button onClick={() => onclick(meme)} shape='round' icon={<EditOutlined />}>Edit</Button>

                            <Delete meme={meme}>
                                <Button onClick={() => deleteMeme(meme)} type="primary" shape="round" icon={<DeleteOutlined />} danger>Delete</Button>
                            </Delete>

                        </div>
                    )) : <ClipLoader color={"#FF0000"} loading={isLoading} size={250} />

                }


            </div>
        </div>
    );
};

export default FavMemes;
