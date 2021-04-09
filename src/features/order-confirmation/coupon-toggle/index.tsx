import React from 'react';
import { Space, Switch } from 'antd';

interface Props {
  callback(couponEnabled: boolean): void,
}

const CouponToggle: React.FC<Props> = ({ callback }: Props) => (
  <Space>
    <span>使用优惠券</span>
    <Switch onChange={callback} />
  </Space>
);

export default CouponToggle;
