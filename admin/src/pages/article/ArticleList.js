import React, {useEffect, useState} from 'react'
import {Button, Col, List, message, Modal, Row} from 'antd'
import './ArticleList.scss'
import axios from "axios";
import servicePath from "../../config/apiUrl";

const {confirm} = Modal
const ArticleList = (props) => {
    const [list, setList] = useState([])
    const getList = async () => {
        const res = await axios({
            method: 'get',
            url: servicePath.getArticleList,
            withCredentials: true
        })
        setList(res.data.list)
    }
    useEffect(() => {
        getList().then()
    }, [])

    const delArticle = (id) => {
        confirm({
            title: '确定要删除这篇博客文章吗?',
            content: '如果你点击OK按钮，文章将会永远被删除，无法恢复。',
            onOk: async () => {
                await axios({
                    method: 'get',
                    url: servicePath.delArticle + id,
                    withCredentials: true
                })
                message.success('文章删除成功')
                await getList()
            },
            onCancel() {
                message.success('没有任何改变')
            },
        })
    }

    const updateArticle = (id) => {
        props.history.push('/index/add/' + id)
    }
    return (
        <div>
            <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={3}>
                            <b>类别</b>
                        </Col>
                        <Col span={3}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={3}>
                            <b>集数</b>
                        </Col>
                        <Col span={3}>
                            <b>浏览量</b>
                        </Col>

                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>

                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className="list-div">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={3}>
                                {item.typeName}
                            </Col>
                            <Col span={3}>
                                {item.addTime}
                            </Col>
                            <Col span={3}>
                                共<span>{item.part_count}</span>集
                            </Col>
                            <Col span={3}>
                                {item.view_count}
                            </Col>

                            <Col span={4}>
                                <Button type="primary"
                                        onClick={() => {
                                            updateArticle(item.id)
                                        }}
                                >
                                    修改
                                </Button>&nbsp;
                                <Button
                                    onClick={() => {
                                        delArticle(item.id)
                                    }}
                                >
                                    删除
                                </Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )
}
export default ArticleList
