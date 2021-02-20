import React, {useState} from "react";
import './Login.scss'
import {Button, Card, Input, message, Spin} from "antd";
import {KeyOutlined, UserOutlined} from "@ant-design/icons"
import axios from "axios";
import servicePath from "../../config/apiUrl";

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin = async () => {
        if (!userName) {
            message.error('用户名不能为空')
            return false
        } else if (!password) {
            message.error('密码不能为空')
            return false
        }

        let dataProps = {
            'userName': userName,
            'password': password
        }
        setIsLoading(true)
        const res = await axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true
        })
        console.log(res.data);
        setIsLoading(false)
        if (res.data.data === '登录成功') {
            localStorage.setItem('openId', res.data.openId)
            props.history.push('/index')
        } else {
            message.error('用户名密码错误')
        }
    }
    return (
        <div className='login'>
            <Spin tip="Loading" spinning={isLoading}>
                <Card title="My Blog System" bordered={true} style={{width: 400}}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined twoToneColor="#8c8c8c" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined twoToneColor="#8c8c8c" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin}> Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login
