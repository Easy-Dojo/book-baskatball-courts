import React from "react";
import {Button, Form, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import './LoginForm.less';

interface LoginFormProps {
    onFinish(values: object): void
}

const Username = () => (
    <Form.Item
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
    >
        <Input
            size="large"
            placeholder="Username"
        />
    </Form.Item>
);

const Password = () => (
    <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
    >
        <Input.Password
            size="large"
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone twoToneColor='#36CFCA'/> : <EyeInvisibleOutlined/>)}
        />
    </Form.Item>
)

const Submit = () => (
    <Form.Item>
        <Button
            size="large"
            block={true}
            type="primary"
            htmlType="submit"
        >
            Submit
        </Button>
    </Form.Item>
);

const LoginForm = ({onFinish}: LoginFormProps) => {
    return (
        <Form
            className="login-form"
            name="login"
            onFinish={onFinish}
        >
            <Username/>
            <Password/>
            <Submit/>
        </Form>
    )
}
export default LoginForm;
