import {Card} from 'antd';
import React, { FC } from 'react';
import Button from '../button';

const { Meta } = Card;


interface memeCardProps {
    meme: {
            name: string;
            img_url: string;
            caption: string;
            tags: string;
        }
    };

const MemeCard: FC<memeCardProps> = ({meme}) => {

    const onclick = (): void => {
        console.log(meme)
    }

    return (
        <div >
            <Card
              hoverable
              style={{width: 240 , height: 200}}
              cover={<img alt="example" src={meme.img_url}/>}
            >
              <Meta title={meme.caption} description={meme.tags}/>

              <Button onclick={onclick} text='Save'/>
            </Card>  
        </div>
    )
};

export default MemeCard;
