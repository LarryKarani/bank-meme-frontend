import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IMyCustomMeme } from '../../interface';
import InputBox from '../../components/Input';
import { Image, Form, Input, Button } from 'antd';
//import Button from '../../components/button';
import { Context as MemeContext } from '../../context';
import { addCustomMemeService } from '../../services';
import './style.scss';

interface IGenerateMemeProps {
    image: string;
}

interface IState {
    caption: string;
    tag: string;
}
const GenerateMeme: FC<IGenerateMemeProps> = ({ image }) => {

    const [stateObj, setState] = useState<IState>({ caption: "", tag: "" });
    const { state: { isLoading }, dispatch, state } = useContext(MemeContext)
    const [form] = Form.useForm();
    const notify = () => toast.success('Meme Created succesfully')

    const handleSubmit = (): void => {
        const generateMemePayload: IMyCustomMeme = {
            ...stateObj,
            image,
        }
        setState({ caption: "", tag: "" })
        form.resetFields();
        addCustomMemeService(dispatch, state, generateMemePayload);
        notify()

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value
        console.log(stateObj, 'state obj')
        setState({
            ...stateObj,
            [event.target.name]: value
        })
    }

    return (
        <div className="generate-meme">
            <ToastContainer/>
            <Image width={250} src={image} />
            {console.log(isLoading)}
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
                    {isLoading && <Button type="primary" size="large" loading> Adding meme </Button>}
                </Form.Item>
            </Form>

            {/* <InputBox placeholder='Enter Caption' onchange={handleChange}  name='caption' value={stateObj.caption}/>
         <input placeholder='Enter tag' onChange={handleChange}  name='tag'  value={stateObj.caption}/>
         {!isLoading ? <Button  text="Submit" onclick={handleSubmit} size="large"/>: <Button loading={isLoading} size="large"/>} */}

        </div>
    )
}

export default GenerateMeme
