import {useEffect} from "react";
import {notification} from "antd";
import {useTypedSelector} from "../../app/hooks/useTypedSelector";
import {selectLoginState} from "./authorizeSlice";

const useLoginStateLoading = () => {
    const loginState = useTypedSelector(selectLoginState)

    useEffect(() => {
        if (loginState.error) {
            notification.open({
                message: 'Login Failed',
                description: loginState.error,
            });
        }
        if (loginState.isLogin) {
            window.location.assign('/home');
        }
    }, [loginState])

    return loginState.loading
}

export default useLoginStateLoading