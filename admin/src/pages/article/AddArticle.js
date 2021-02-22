import React, {useEffect, useState} from 'react'
import './AddArticle.scss'
import {Button, Col, DatePicker, Input, message, Row, Select} from "antd";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import axios from "axios";
import servicePath from "../../config/apiUrl";

const {Option} = Select
const {TextArea} = Input

function AddArticle(props) {
    const [articleId, setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState('')   //文章标题
    const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd, setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate, setShowDate] = useState()   //发布日期
    const [updateDate, setUpdateDate] = useState() //修改日志的日期
    const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType, setSelectType] = useState(1) //选择的文章类别

    marked.setOptions({
        renderer: marked.Renderer(),
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
    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }

    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value)
        let html = marked(e.target.value)
        setIntroducehtml(html)
    }

    const getTypeInfo = async () => {
        const res = await axios({
            method: 'get',
            url: servicePath.getTypeInfo,
            headers: {'Access-Control-Allow-Origin': '*'},
            withCredentials: true
        })
        if (res.data.data == "没有登录") {
            localStorage.removeItem('openId')
            props.history.push('/')
        } else {
            setTypeInfo(res.data.data)
        }
    }

    const getArticleById = async (id) => {
        const res = await axios({
            method: 'get',
            url: servicePath.getArticleById + id,
            withCredentials: true
        })
        setArticleTitle(res.data.data[0].title)
        setArticleContent(res.data.data[0].article_content)
        // let html = marked(res.data.data[0].article_content)
        let html = res.data.data[0].article_content
        setMarkdownContent(html)
        setIntroducemd(res.data.data[0].introduce)
        // let tmpInt = marked(res.data.data[0].introduce)
        let tmpInt = res.data.data[0].introduce
        setIntroducehtml(tmpInt)
        setShowDate(res.data.data[0].addTime)
        setSelectType(res.data.data[0].typeId)
    }
    useEffect(() => {
        getTypeInfo().then()
        //获得文章ID
        let tmpId = props.match.params.id
        if (tmpId) {
            setArticleId(tmpId)
            getArticleById(tmpId).then()
        }
    }, [])

    const selectTypeHandler = (value) => {
        setSelectType(value)
    }

    const saveArticle = async () => {
        if (!selectedType) {
            message.error('必须选择文章类别')
            return false
        } else if (!articleTitle) {
            message.error('文章名称不能为空')
            return false
        } else if (!articleContent) {
            message.error('文章内容不能为空')
            return false
        } else if (!introducemd) {
            message.error('简介不能为空')
            return false
        } else if (!showDate) {
            message.error('发布日期不能为空')
            return false
        }
        const dataProps = {}
        dataProps.type_id = selectedType
        dataProps.title = articleTitle
        dataProps.article_content = articleContent
        dataProps.introduce = introducemd
        let dateText = showDate.replace('-', '/') //把字符串转换成时间戳
        dataProps.addTime = (new Date(dateText).getTime()) / 1000

        if (articleId === 0) {
            console.log('articleId=:' + articleId);
            dataProps.view_count = Math.ceil(Math.random() * 100) + 1000
            const res = await axios({
                method: 'post',
                url: servicePath.addArticle,
                data: dataProps,
                withCredentials: true
            })
            setArticleId(res.data.insertId)
            if (res.data.isScuccess) {
                message.success('文章保存成功')
            } else {
                message.error('文章保存失败');
            }
        } else {
            dataProps.id = articleId
            const res = await axios({
                method: 'post',
                url: servicePath.updateArticle,
                data: dataProps,
                withCredentials: true
            })
            if (res.data.isScuccess) {
                message.success('文章保存成功')
            } else {
                message.error('保存失败');
            }
        }
    }

    const showHtml = {__html: marked(markdownContent)}
    const introduceHtml = {__html: marked('文章简介：' + introducehtml)}
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input
                                value={articleTitle}
                                onChange={e => {
                                    setArticleTitle(e.target.value)
                                }}
                                placeholder="博客标题"
                                size="large"/>
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
                                {
                                    typeInfo.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.id}>{item.typeName}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea
                                value={articleContent}
                                className="markdown-content"
                                rows={35}
                                placeholder="文章内容"
                                onChange={changeContent}
                                onPressEnter={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div
                                className="show-html"
                                dangerouslySetInnerHTML={showHtml}
                            ></div>

                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
                            <br/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea
                                rows={4}
                                placeholder="文章简介"
                                value={introducemd}
                                onChange={changeIntroduce}
                                onPressEnter={changeIntroduce}
                                className="markdown-content"
                            />
                            <br/><br/>
                            <div
                                className="introduce-html"
                                dangerouslySetInnerHTML={introduceHtml}
                            ></div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    placeholder="发布日期"
                                    size="large"
                                    onChange={(date, dateString) => setShowDate(dateString)}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle
