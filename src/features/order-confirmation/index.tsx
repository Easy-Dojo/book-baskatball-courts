import React, {useEffect, useState} from "react";
import OrderDetail from "./order-detail";
import {Button, Col, Row, Space, Spin} from "antd";
import orderConfirmationService from './service';
import './index.less';
import PaymentDetail from "./payment-detail";

interface OrderConfirmationProp {
    match: {
        params: {
            orderId: string
        }
    }
}

const OrderConfirmation: React.FC<OrderConfirmationProp> = ({match: {params: {orderId}}}) => {
    useEffect(() => {
        setLoading(true);
        orderConfirmationService.queryOrder(orderId).then((receivedOrder) => {
            setOrder(receivedOrder);
        }).finally(() => {
            setLoading(false);
        });
    }, [orderId]);

    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<any>(null);
    const [useCoupon, setUseCoupon] = useState(false);
    const checkCoupon = (coupon: string) => {
        console.log(coupon)
    };
    const confirm = () => {
        window.location.assign('/order-result');
    }
    return (
        <Spin size="large" spinning={loading}>
            <div className="order-confirmation-layout">
                {order && (
                    <>
                        <Space direction="vertical" size="large">
                            <OrderDetail order={order}/>
                            <PaymentDetail
                                originalAmount={order.originalAmount}
                                timeDiscount={order.timeDiscount}
                                couponDiscount={order.couponDiscount}
                                amount={order.amount}
                            />
                        </Space>
                        <Row gutter={6}>
                            <Col span={12}>
                                <Button block size="large">取消</Button>
                            </Col>
                            <Col span={12}>
                                <Button block type="primary" size="large" onClick={confirm}>确认预定</Button>
                            </Col>
                        </Row>
                    </>
                )}
            </div>
        </Spin>
    );
}

export default OrderConfirmation;
