import React, {useState} from 'react';
import Head from 'next/head'
import {Col, List, Row} from 'antd'
import Header from '../components/Header'
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons'
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import axios from "axios";

const Home = (list) => {
    console.log(list);
    const [myList, setMyList] = useState(list.data)
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header></Header>
            <Row className="commonMain" justify="center">
                <Col className="commonLeft" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={myList}
                        renderItem={item => (
                            <List.Item>
                                <div className='listTitle'>{item.title}</div>
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
                <Col className="commonRight" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author></Author>
                    <Advert></Advert>
                </Col>
            </Row>
            <Footer></Footer>
        </>
    )
}

Home.getInitialProps = async () => {
    const res = await axios.get('http://127.0.0.1:7001/default/getArticleList')
    // console.log(res.data);
    return res.data
}
export default Home
