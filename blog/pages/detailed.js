import React from 'react';
import Head from 'next/head'
import {Affix, Breadcrumb, Col, Row} from 'antd'
import Header from '../components/Header'
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons'
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import styles from '../styles/pages/detailed.module.scss';
import 'markdown-navbar/dist/navbar.css';
import axios from "axios";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../components/tocify.tsx'
import servicePath from "../config/apiUrl";

const Detailed = (props) => {
    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    });
    let html = marked(props.article_content)
    return (
        <div className="detail-box">
            <Head>
                <title>Detailed</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header></Header>
            <Row className="commonMain" justify="center">
                <Col className="commonLeft" xs={24} sm={24} md={18} >
                    <div className="blogBread">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                            <Breadcrumb.Item>XXXXX</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className={styles.detailedTitle}>
                            React实战视频教程-技术胖Blog开发(更新08集)
                        </div>
                        <div className={`${'listIcon'} ${styles.center}`}>
                            <span className='listIconSpan'><CalendarOutlined/> 2019-06-28</span>
                            <span className='listIconSpan'><FolderOutlined/> 视频教程</span>
                            <span className='listIconSpan'><FireOutlined/> 5498人</span>
                        </div>

                        <div className={styles.detailedContent} dangerouslySetInnerHTML={{__html: html}}></div>
                    </div>
                </Col>
                <Col className="commonRight" xs={0} sm={0} md={6} >
                    <Author></Author>
                    <Advert></Advert>
                    <Affix offsetTop={5}>
                        <div className='commonBox'>
                            <div className={styles.navTitle}>文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    )
}
Detailed.getInitialProps = async (context) => {
    console.log(context.query.id)
    const id = context.query.id
    const res = await axios.get(servicePath.getArticleById + id)
    return res.data.data[0]
}
export default Detailed
