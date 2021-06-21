import React, {FC, useState, ChangeEvent, useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Image, Form, Input, Button } from 'antd';
import {ICustomMeme} from '../../interface';
import InputBox from '../../components/Input';
import {Context as MemeContext} from '../../context';
import {editCustomMemeService} from '../../services';


import './style.scss';



interface IState {
    caption: string;
    tag: string;
    image: string;
    _id: string;
}

interface IUpdateMemeProps {
    meme: ICustomMeme;
}

const UpdateMeme: FC<IUpdateMemeProps> = ({meme}) => {
    const {caption, tag, image, _id} = meme
    const [stateObj, setState] = useState<IState>({caption, tag, image, _id})
    const {state:{isLoading},dispatch, state} = useContext(MemeContext)
    const [form] = Form.useForm();
    const notify = () => toast.success('Meme edited succesfully')

    const handleSubmit = ():void => {
        const updateMemePayload: ICustomMeme = {
            ...stateObj
        }
        form.resetFields();
        editCustomMemeService(dispatch, state, updateMemePayload);
        notify()
        
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
       const value = event.target.value
       setState({
           ...stateObj,
           [event.target.name]: value
       })
    }
    
    return (
        <div className="generate-meme">
        <ToastContainer/>
         <Image width={250} src={meme.image}/>
         <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}

            >
                <Form.Item label="Caption" required >
                    <Input placeholder="input caption" name="caption" onChange={handleChange} value={stateObj.caption} required />
                </Form.Item>
                <Form.Item
                    label="Tag"
                    required
                >
                    <Input placeholder="input tag" name="tag" onChange={handleChange} value={stateObj.tag} required />
                </Form.Item>
                <Form.Item>
                    {!isLoading && <Button type="primary" htmlType="submit">Submit</Button>}
                    {isLoading && <Button type="primary" size="large" loading> Updating </Button>}
                </Form.Item>
            </Form>       
        </div>
    )
}

export default UpdateMeme
