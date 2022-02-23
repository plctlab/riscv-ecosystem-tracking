import { Layout, Menu } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GlobalOutlined } from '@ant-design/icons';
import i18next from 'i18next'
import {useTranslation} from "react-i18next";

const { Header } = Layout;

//Category means different mode name/banner render stuff
const categories = [
    {
        'url': 'searchByDevice'
    },
]

//Support languages, add to make dropdown more choice
//code: the language code in ISO 639-1
//language: the display name of the language in dropdown
const languages = [
    {
        'code':'en',
        "language":"English"
    },
    {
        'code':'zh-Hans',
        "language":"简体中文"
    }
]

const { SubMenu } = Menu;
const Banner = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return(
        <div>
            <Header style={{background:'#fff'}}>
                <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                    <Link to={"/"}>
                        <Menu.Item>
                            <img width="200" height="62" alt="RISC-V International"
                                 src="https://riscv.org/wp-content/uploads/2020/06/riscv-color.svg"
                                 srcSet="https://riscv.org/wp-content/uploads/2020/06/riscv-color.svg 1x, https://riscv.org/wp-content/uploads/2020/06/riscv-color.svg 2x" />
                        </Menu.Item>
                    </Link>
                    {categories.map((category) => {
                        const key = category.url;
                        const url = '/' + key;
                        return <Menu.Item key={key} onClick={() => {navigate(url)}}>{t(key)}</Menu.Item>;
                    })}
                    <SubMenu key="SubMenu" style={{marginLeft:"auto"}} icon={<GlobalOutlined />} title={t('language')}>
                        {
                            languages.map((language)=>{
                                const lan = language.language;
                                const code = language.code;
                                return <Menu.Item key={code} onClick={()=>{i18next.changeLanguage(code).then(r => {console.log("Success Change Language.")})}}>{lan}</Menu.Item>
                            })
                        }
                    </SubMenu>
                </Menu>
            </Header>
        </div>
    )
}

export default Banner;