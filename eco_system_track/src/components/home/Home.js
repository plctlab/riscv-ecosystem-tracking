import { Layout, Breadcrumb, Button, Row, Col } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import './home.css';
import {RightOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const Home = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item href={'/'}>{t('project_name')}</Breadcrumb.Item>
                    <Breadcrumb.Item href={'/'}>{t('home')}</Breadcrumb.Item>
                </Breadcrumb>
            </Content>
            <div style={{paddingTop:'5%',paddingBottom:'5%', background:'linear-gradient(90deg,#0a6b7c 0%,#273272 100%)', opacity:'1'}}>
                <h1 style={{color:'#fff', textAlign:'center', fontSize:'2.5em'}}>{t('welcome1')}</h1>
                <h2 style={{color:'#fff', textAlign:'center',paddingTop:'2%'}}>{t('welcome2')}</h2>
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