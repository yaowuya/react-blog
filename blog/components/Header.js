import React, {useEffect, useState} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styles from '../styles/components/header.module.scss'
import {Col, Menu, Row} from 'antd'
import * as Icon from '@ant-design/icons'
import {HomeOutlined} from '@ant-design/icons'
import axios from "axios";
import servicePath from "../config/apiUrl";

const Header = () => {
    const [navArray, setNavArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(servicePath.getTypeInfo)
            setNavArray(result.data.data)
        }
        fetchData().then()
    }, [])
//跳转到列表页
    const handleClick = (e) => {
        if (e.key === "0") {
            Router.push('/')
        } else {
            Router.push('/blogList?id=' + e.key)
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles.headerCenter}>
                <Row justify="center">
                    <Col xs={24} sm={24} md={13}>
                    <span className={styles.headerLogo}>
                         <Link href='/'>
                            <a> 技术胖</a>
                        </Link>
                    </span>
                        <span className={styles.headerTxt}>专注前端开发,每年100集免费视频。</span>
                    </Col>
                    <Col xs={0} sm={0} md={11}>
                        <Menu
                            mode='horizontal'
                            className={styles.antMenu}
                            onClick={handleClick}
                        >
                            <Menu.Item className={styles.antMenuItem} key="0" icon={<HomeOutlined/>}>
                                博客首页
                            </Menu.Item>
                            {
                                navArray.map((item) => {
                                    return (
                                        <Menu.Item key={item.id} className={styles.antMenuItem}>
                                            {
                                                React.createElement(
                                                    Icon[item.icon],
                                                    {
                                                        style: {fontSize: '16px', color: '#08c'}
                                                    }
                                                )
                                            }
                                            {item.typeName}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Header;
