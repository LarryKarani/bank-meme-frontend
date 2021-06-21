import React, { FC, useContext, useEffect, useState} from 'react';
import {Context as MemeContext } from '../../../context';
import {ClipLoader} from 'react-spinners';
import {getAllMemes} from '../../../services';
import {Image} from 'antd';
import { Card, Modal } from 'antd';
import { IMeme } from '../../../interface';
import Button from '../../../components/button';
import GenerateMeme from '../../generateMeme';

import './style.scss'
const AllMemes: FC = () => {
    const {
        state: {memes, isLoading},
        dispatch,
        state
    } = useContext(MemeContext)

    useEffect(() => {
        getAllMemes(dispatch, state)
    }, [])

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [image, setMemeImage] = useState('')
    

    const handleCloseModal =  (): void => {
       setOpenModal(false)
    }
    const onclick = (meme: IMeme): void => {
        const {image} = meme
        setMemeImage(image)
        setOpenModal(true)
    }
    return (
        <div className="meme-container">
           <Modal visible={openModal} onCancel={handleCloseModal} footer={null}>
               <GenerateMeme image={image} />
           </Modal>
           {
              
               (!isLoading && memes.length > 0) ? memes.map((meme) => (
                <Card title={meme.name}>
                <Image
                    width={200}
                    height={200}
                    src={meme.image}
                />
                <Button onclick={() => onclick(meme)} text={'Generate meme'}/>
                </Card>
               )): <ClipLoader color={"#FF0000"} loading={isLoading}  size={250}/>

           }
           
           
        </div>
    )
}

export default AllMemes
