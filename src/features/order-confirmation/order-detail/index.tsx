import React from "react";
import OrderItem from "./order-item";
import './index.less';
import {Divider, Row} from "antd";

const OrderDetail: React.FC = () => {
    const order: any[] = [
        {
            court: 'A1',
            subCourt: 0,
            hours: 2,
            rate: 50
        },
        {
            court: 'B',
            subCourt: null,
            hours: 2,
            rate: 50
        }
    ];
    return (
        <div className="order-detail-layout">
            <h3>合计场地数：{order.length}</h3>
            <Divider/>
            <table className="order-detail-table">
                <tbody>
                {order.map((orderItems, idx) => (
                    <OrderItem key={idx} {...orderItems}/>
                ))}
                </tbody>
            </table>
            <Divider/>
            <Row justify="space-between">
                <h3>总金额</h3>
                <h3>￥200.00</h3>
            </Row>
            <Divider dashed/>
            <Row justify="space-between">
                <span>预定时长优惠</span>
                <span>-￥80.00</span>
            </Row>
        </div>
    )
}

export default OrderDetail;
