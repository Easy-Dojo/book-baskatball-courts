import React, {useState} from "react";
import OrderDetail from "./order-detail";
import Coupon from "./coupon";
import {Button, Space} from "antd";
import Amount from "./amount";
import CouponToggle from "./coupon-toggle";
import './index.less';

const OrderConfirmation: React.FC = () => {
    const [useCoupon, setUseCoupon] = useState(false);
    const checkCoupon = (coupon: string) => {
        console.log(coupon)
    };
    const confirm = () => {
        window.location.assign('/order-result');
    }
    return (
        <div className="order-confirmation-layout">
            <Space direction="vertical">
                <OrderDetail/>
                <CouponToggle callback={setUseCoupon}/>
                {useCoupon && <Coupon callback={checkCoupon}/>}
            </Space>
            <div className="amount-container">
                <Amount amount={188}/>
            </div>
            <Button block type="primary" size="large" onClick={confirm}>确认预定</Button>
        </div>
    );
}

export default OrderConfirmation;
