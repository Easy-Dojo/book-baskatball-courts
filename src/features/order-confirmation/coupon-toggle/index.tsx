import React from "react";
import {Space, Switch} from "antd";

interface CouponToggleProp {
    callback(couponEnabled: boolean): void,
}

const CouponToggle: React.FC<CouponToggleProp> = ({callback}) => {
    return (
        <Space>
            <span>使用优惠券</span>
            <Switch onChange={callback}/>
        </Space>
    )
}

export default CouponToggle;
