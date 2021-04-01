import React, {useState} from "react";
import {Button, Form, Input, notification, Spin} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import axios from "axios";

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const onFinish = (values: any) => {
        setLoading(true);
        axios.post('/api/authorize', values).then(() => {
            window.location.assign('/home');
        }).catch(() => {
            notification.open({
                message: 'Login Failed',
                description: 'Invalid username or password',
            });
        }).finally(() => {
            setLoading(false);
        });
    }
    return (
        <Spin spinning={loading}>
            <Form
                name="login"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Spin>
    )
}
export default Login
