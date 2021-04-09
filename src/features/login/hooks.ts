import {useTypedSelector} from "../../app/hooks/useTypedSelector";
import {authorizeActionCreators, selectLoginState} from "./authorizeSlice";
import {useEffect} from "react";
import {notification} from "antd";
import {useAppDispatch} from "../../app/hooks/useAppDispatch";
import {bindActionCreators} from "redux";
import {useHistory} from "react-router-dom";
import {Pages} from "../../app/routes";

export const useAuthorizeActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(authorizeActionCreators, dispatch)
};

export const useHandleLoginStateChange = () => {
    const history = useHistory();
    const loginState = useTypedSelector(selectLoginState)

    useEffect(() => {
        if (loginState.error) {
            notification.error({
                message: 'Login Failed',
                description: loginState.error,
            });
        }
        if (loginState.isLogin) {
            notification.success({
                message: 'Login Success',
            });
            history.push(Pages.BookCourt.path)
        }
    }, [loginState, history])

    return null
}