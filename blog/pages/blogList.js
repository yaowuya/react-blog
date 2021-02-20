import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import {Breadcrumb, Col, List, Row} from 'antd'
import Header from '../components/Header'
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons'
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import axios from "axios";
import servicePath from "../config/apiUrl";
import Link from "next/link";


const BlogList = (list) => {
    const [myList, setMyList] = useState(list.data)
    useEffect(() => {
        setMyList(list.data)
    })
    return (
        <>
            <Head>
                <title>BlogList</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header></Header>
            <Row className="commonMain" justify="center">
                <Col className="commonLeft" xs={24} sm={24} md={18}>
                    <div className="blogBread">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <List
                        itemLayout="vertical"
                        dataSource={myList}
                        renderItem={item => (
                            <List.Item>
                                <div className='listTitle'>
                                    <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className='listIcon'>
                                    <span className='listIconSpan'><CalendarOutlined/> {item.addTime}</span>
                                    <span className='listIconSpan'><FolderOutlined/> {item.typeName}</span>
                                    <span className='listIconSpan'><FireOutlined/> {item.view_count}人</span>
                                </div>
                                <div className='listContext'>{item.introduce}</div>
                            </List.Item>
                        )}
                    ></List>
                </Col>
                <Col className="commonRight" xs={0} sm={0} md={6}>
                    <Author></Author>
                    <Advert></Advert>
                </Col>
            </Row>
            <Footer></Footer>
        </>
    )
}

BlogList.getInitialProps = async (context) => {
    let id = context.query.id
    const res = await axios.get(servicePath.getListById + id)
    return res.data
}
export default BlogList
