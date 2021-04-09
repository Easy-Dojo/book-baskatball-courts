import React from 'react';
import { SmileFilled } from '@ant-design/icons';
import { Card, Divider, Row } from 'antd';
import './index.less';

interface Props {
  originalAmount: number,
  timeDiscount: number,
  couponDiscount: number,
  amount: number,
}

const PaymentDetail: React.FC<Props> = ({
  originalAmount, timeDiscount, couponDiscount, amount,
}: Props) => (
  <>
    <div className="payment-title">
      <SmileFilled className="payment-icon" />
      <h4>预约订单</h4>
    </div>
    <Card>
      <Row justify="space-between">
        <span>总金额</span>
        <span>{`￥${originalAmount}`}</span>
      </Row>
      <Divider />
      <Row justify="space-between" className="smaller-font">
        <span>预定时长优惠</span>
        <span>{`￥${timeDiscount}`}</span>
      </Row>
      <Row justify="space-between" className="smaller-font">
        <span>优惠券</span>
        <span>{`￥${couponDiscount}`}</span>
      </Row>
      <Divider dashed />
      <Row justify="space-between">
        <span>应付金额</span>
        <span>{`￥${amount}`}</span>
      </Row>
    </Card>
  </>
);

export default PaymentDetail;
