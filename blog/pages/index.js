import React, {useState} from 'react';
import Head from 'next/head'
import {Col, List, Row} from 'antd'
import Header from '../components/Header'
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons'
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/apiUrl";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const Home = (list) => {
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }

    });
    // console.log(list);
    const [myList, setMyList] = useState(list.data)
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header></Header>
            <Row className="commonMain" justify="center">
                <Col className="commonLeft" xs={24} sm={24} md={18}>
                    <List
                        header={<div>最新日志</div>}
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
                                <div
                                    className='listContext markdown-box'
                                    dangerouslySetInnerHTML={{__html: marked(item.introduce)}}
                                />
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

Home.getInitialProps = async () => {
    const res = await axios.get(servicePath.getArticleList)
    // console.log(res.data);
    return res.data
}
export default Home
