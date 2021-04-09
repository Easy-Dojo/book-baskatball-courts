import React from "react";
import {AxiosBasicCredentials} from "axios";
import Logo from "./logo/Logo";
import LoginForm from "./loginForm/LoginForm";
import {useAuthorizeActions, useHandleLoginStateChange} from "./hooks";
import './index.less';

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
        </div>
    )
}
export default Login;
