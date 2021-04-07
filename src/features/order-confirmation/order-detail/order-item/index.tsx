import React from "react";
import {COURT_SUB_TYPE} from "../../../book-court/service";
import './index.less';

interface OrderItemProp {
    court: string,
    subCourt: COURT_SUB_TYPE | null,
    hours: number,
    rate: number,
}

const OrderItem: React.FC<OrderItemProp> = ({court, subCourt, hours, rate}) => {
    return (
        <tr className="order-item-row">
            <td>场地{court}</td>
            <td>类型：{subCourt === null ? '全场' : '半场'}</td>
            <td>时长：{hours}小时</td>
            <td>￥{(rate * hours).toFixed(2)}</td>
        </tr>
    )
}

export default OrderItem;
