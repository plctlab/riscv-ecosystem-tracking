import { Layout, Breadcrumb, Button, Row, Col } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import './home.css';
import {RightOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const { Content } = Layout;

const Home = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <title>ETS - Home</title>
            </Helmet>
            <Content className={'home-content'}>
                <Breadcrumb className={'breadcrumb'}>
                    <Breadcrumb.Item href={'/'}>{t('project_name')}</Breadcrumb.Item>
                    <Breadcrumb.Item href={'/'}>{t('home')}</Breadcrumb.Item>
                </Breadcrumb>
            </Content>
            <div className={'welcome-container'}>
                <h1>{t('welcome1')}</h1>
                <h2 >{t('welcome2')}</h2>
                <Row style={{paddingTop:'2%'}}>
                    <Col span={4} offset={10}>
                        <Button className={'start_lookup_button'} type="primary" shape={'round'} size={'large'} block icon={<RightOutlined />} onClick={()=>{
                            navigate('/searchByDevice');
                        }}>{t('start_lookup')}</Button>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Home;