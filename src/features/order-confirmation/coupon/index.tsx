import { TagFilled } from '@ant-design/icons';
import {
  Button, Drawer, Input, Row, Space,
} from 'antd';
import React, { useRef } from 'react';
import './index.less';

interface Props {
  coupon: string,
  checkCoupon(coupon: string): Promise<void>,
  visible: boolean,
  onClose(): void,
}

const Coupon: React.FC<Props> = ({
  coupon, checkCoupon, visible, onClose,
}: Props) => {
  const inputRef = useRef<any>(null);
  return (
    <Drawer
      placement="bottom"
      onClose={onClose}
      visible={visible}
      key={coupon}
    >
      <Space className="coupon-title">
        <TagFilled className="coupon-icon" />
        <h4>优惠券验证码</h4>
      </Space>
      <Row>
        <Input className="coupon-input" ref={inputRef} defaultValue={coupon} />
        <Button
          type="primary"
          onClick={() => {
            checkCoupon(inputRef.current.state.value).finally(onClose);
          }}
        >
          验证
        </Button>
      </Row>
    </Drawer>

  );
};

export default Coupon;
