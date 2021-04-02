import React from "react";
import {AxiosBasicCredentials} from "axios";
import Logo from "./logo/Logo";
import LoginForm from "./loginForm/LoginForm";
import Footer from "./footer/Footer";
import {useAuthorizeActions, useHandleLoginStateChange} from "./hooks";

const Login: React.FC = () => {
    useHandleLoginStateChange()
    const {doLogin} = useAuthorizeActions()
    const onFinish = (values: AxiosBasicCredentials) => {
        doLogin(values);
    }

    return (
        <div className="login-layout">
            <Logo/>
            <LoginForm onFinish={onFinish}/>
            <Footer/>
        </div>
    )
}
export default Login;