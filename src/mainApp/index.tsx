import { Route } from 'react-router-dom';
import React, { Suspense, lazy, Fragment, FC } from 'react';
import { ScaleLoader } from 'react-spinners';
import { Layout } from 'antd';
import NavBar from '../components/navbar';
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

const { Content } = Layout;


const Memes = lazy(() => import('../containers/memes'))
const LoadData: FC = () => {
    return (
        <div>
            <ScaleLoader
                color={'#df3831'}
                loading={true}
            />
            <h2>
                MEME BANK
            </h2>
        </div>
    )
}
const MainApp: FC = () => {
    return (
        <Fragment>
            <div className={'main-layout'}>
                <Layout>
                    <NavBar/>
                    <Content>
                        <Suspense fallback={
                            <LoadData />
                        }>
                            <Route path="/memes" component={Memes} />
                        </Suspense>
                    </Content>
                </Layout>
            </div>
        </Fragment>
    )
}

export default MainApp;
