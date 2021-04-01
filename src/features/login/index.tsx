import React, {useState} from "react";
import {notification, Spin} from "antd";
import axios from "axios";
import './index.less';
import Logo from "./logo/Logo";
import LoginForm from "./loginForm/LoginForm";
import Footer from "./footer/Footer";

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
            <div className="container">
                <Logo/>
                <LoginForm onFinish={onFinish}/>
                <Footer/>
            </div>
        </Spin>
    )
}
export default Login;
