import React, { useState } from 'react';
import { RightOutlined, SmileFilled } from '@ant-design/icons';
import { Card, Divider, Row } from 'antd';
import './index.less';
import Coupon from '../coupon';
import { Order } from '../service';

interface Props {
  originalAmount: number,
  timeDiscount: number,
  couponDiscount: number,
  amount: number,
  coupon: string,
  checkCoupon(newCoupon:string): Promise<void>
}

const PaymentDetail: React.FC<Props> = ({
  originalAmount, timeDiscount, couponDiscount, amount, coupon, checkCoupon,
}: Props) => {
  const [showCoupon, setShowCoupon] = useState(false);
  const onClickCoupon = () => {
    setShowCoupon(true);
  };
  const onCloseCoupon = () => {
    setShowCoupon(false);
  };
  return (
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
          <span className="highlight">{`￥${timeDiscount}`}</span>
        </Row>
        <Row justify="space-between" className="smaller-font" onClick={onClickCoupon}>
          <span>优惠券</span>
          <span>
            <span className="highlight">{`￥${couponDiscount}`}</span>
            {' '}
            <RightOutlined style={{ color: '@text-color' }} />
          </span>
        </Row>
        <Divider dashed />
        <Row justify="space-between">
          <span>应付金额</span>
          <span className="highlight">{`￥${amount}`}</span>
        </Row>
      </Card>
      <Coupon
        coupon={coupon}
        checkCoupon={checkCoupon}
        onClose={onCloseCoupon}
        visible={showCoupon}
      />
    </>
  );
};

export default PaymentDetail;
