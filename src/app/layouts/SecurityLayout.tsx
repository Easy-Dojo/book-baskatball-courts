import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {selectLoginState} from "../../features/login/authorizeSlice";
import {Spin} from "antd";
import { useHistory } from 'react-router-dom';
import {Pages} from "../routes";

const SecurityLayout: React.FC = ({children}) => {
    const {isLogin, loading} = useTypedSelector(selectLoginState)
    const history = useHistory();

    useEffect(() => {
        if (!isLogin && window.location.pathname !== Pages.Login.path) {
            history.push(Pages.Login.path)
        }
    }, [isLogin, history])

    return <Spin spinning={!isLogin && loading}>
        {children}
    </Spin>
}

export default SecurityLayout