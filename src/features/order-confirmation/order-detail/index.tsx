import React from 'react';
import { Card, Divider } from 'antd';
import _ from 'lodash';
import OrderItem from './order-item';
import './index.less';
import { Order } from '../service';

interface Props {
  order: Order
}

const OrderDetail: React.FC<Props> = ({ order }: Props) => {
  const groupedCourts = _.groupBy(order.courts, 'court');
  const formattedCourts = Object.keys(groupedCourts).map((court) => ({
    court,
    subCourt: groupedCourts[court][0].subCourt,
    hours: _.sum(groupedCourts[court].map((c) => (c.periodHour))),
    amount: _.sum(groupedCourts[court].map((c) => (c.amount))),
  }));
  return (
    <Card bordered={false}>
      <h4>
        合计场地数：
        {formattedCourts.length}
      </h4>
      <Divider />
      <table className="order-detail-table">
        <tbody>
          {formattedCourts.map(({
            court, subCourt, hours, amount,
          }) => (
            <OrderItem
              key={court}
              court={court}
              subCourt={subCourt}
              hours={hours}
              amount={amount}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default OrderDetail;
