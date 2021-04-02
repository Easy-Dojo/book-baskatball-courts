import {useTypedSelector} from "../../app/hooks/useTypedSelector";
import {authorizeActionCreators, selectLoginState} from "./authorizeSlice";
import {useEffect} from "react";
import {notification} from "antd";
import {useAppDispatch} from "../../app/hooks/useAppDispatch";
import {bindActionCreators} from "redux";

export const useAuthorizeActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(authorizeActionCreators, dispatch)
};

export const useLoginStateLoading = () => {
    const loginState = useTypedSelector(selectLoginState)

    useEffect(() => {
        if (loginState.error) {
            notification.open({
                message: 'Login Failed',
                description: loginState.error,
            });
        }
        if (loginState.isLogin) {
            window.location.assign('/');
        }
    }, [loginState])

    return loginState.loading
}