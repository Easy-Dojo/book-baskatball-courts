import { TagFilled } from '@ant-design/icons';
import {
  Button, Drawer, Input, Row, Space,
} from 'antd';
import React, { useRef } from 'react';
import './index.less';

interface Props {
  checkCoupon(coupon: string): void,
  visible: boolean,
  onClose(): void,
}

const Coupon: React.FC<Props> = ({ checkCoupon, visible, onClose }: Props) => {
  const inputRef = useRef<any>(null);
  return (
    <Drawer
      placement="bottom"
      onClose={onClose}
      visible={visible}
    >
      <Space className="coupon-title">
        <TagFilled className="coupon-icon" />
        <h4>优惠券验证码</h4>
      </Space>
      <Row>
        <Input className="coupon-input" size="large" ref={inputRef} />
        <Button
          type="primary"
          size="large"
          onClick={() => {
            checkCoupon(inputRef.current.state.value);
          }}
        >
          验证
        </Button>
      </Row>
    </Drawer>

  );
};

export default Coupon;
