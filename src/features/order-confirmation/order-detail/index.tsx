import React from "react";
import OrderItem from "./order-item";
import './index.less';
import {Card, Divider} from "antd";
import {Order} from "../service";
import _ from 'lodash';

interface OrderDetailProp {
    order: Order
}

const OrderDetail: React.FC<OrderDetailProp> = ({order}) => {
    const groupedCourts = _.groupBy(order.courts, 'court');
    const formattedCourts = Object.keys(groupedCourts).map((court) => ({
        court,
        subCourt: groupedCourts[court][0].subCourt,
        hours: _.sum(groupedCourts[court].map((c) => (c.periodHour))),
        amount: _.sum(groupedCourts[court].map((c) => (c.amount))),
    }))
    return (
        <Card bordered={false}>
            <h4>合计场地数：{formattedCourts.length}</h4>
            <Divider/>
            <table className="order-detail-table">
                <tbody>
                {formattedCourts.map((court, idx) => (
                    <OrderItem key={idx} {...court}/>
                ))}
                </tbody>
            </table>
        </Card>
    )
}

export default OrderDetail;
