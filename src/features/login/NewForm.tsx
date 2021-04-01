import React from "react";
import {Button, Form, Input} from "antd";
import service from "./service";
import {AxiosBasicCredentials} from "axios";
import {EyeFilled} from "@ant-design/icons";

const LoginForm: React.FC = () => {
    const onFinish = (authInfo: AxiosBasicCredentials) => {
        service.authorize(authInfo).then(res => {
            console.log(res.data)
        })
    };

    return (
        <div className="login-layout">
            <div className="login-layout-top">
                <h3 className="login-layout-title">你好，</h3>
                <h4 className="login-layout-desc">欢迎来到浦思篮球🏀！</h4>
            </div>
            <div className="login-index-main">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: '请输入用户名!'}]}
                    >
                        <Input size="large" placeholder="用户名"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: '请输入密码'}]}
                    >
                        <Input.Password
                            size="large"
                            type="password"
                            placeholder="密码"
                            iconRender={visible => (visible ? <EyeFilled style={{color: "#39C8C2"}}/> : <EyeFilled/>)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button size="large" type="primary" shape="round" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
};

export default LoginForm
