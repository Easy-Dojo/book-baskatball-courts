import React from "react";
import {Result} from "antd";


const OrderResult: React.FC = () => {
    return (
        <Result
            style={{marginTop: 100}}
            status="success"
            title="预订成功"
            subTitle="请按预定时间前往篮球场"
        />
    )
}

export default OrderResult;
