import React from "react";
import {Spin} from "antd";
import {AxiosBasicCredentials} from "axios";
import Logo from "./logo/Logo";
import LoginForm from "./loginForm/LoginForm";
import Footer from "./footer/Footer";
import {useAuthorizeActions} from "./useAuthorizeActions";
import useLoginStateLoading from "./useLoginStateLoading";

const Login: React.FC = () => {
    const loginIsLoading = useLoginStateLoading()
    const {doLogin} = useAuthorizeActions()
    const onFinish = (values: AxiosBasicCredentials) => {
        doLogin(values);
    }

    return (
        <Spin spinning={loginIsLoading}>
            <div className="login-layout">
                <Logo/>
                <LoginForm onFinish={onFinish}/>
                <Footer/>
            </div>
        </Spin>
    )
}
export default Login;