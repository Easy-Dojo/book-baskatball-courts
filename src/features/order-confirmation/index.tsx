import {
  Button, Row, Space, Spin,
} from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';
import OrderDetail from './order-detail';
import PaymentDetail from './payment-detail';
import orderConfirmationService from './service';

interface Props {
  match: {
    params: {
      orderId: string
    }
  }
}

const OrderConfirmation: React.FC<Props> = ({ match: { params: { orderId } } }: Props) => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    orderConfirmationService.queryOrder(orderId).then((receivedOrder) => {
      setOrder(receivedOrder);
    }).finally(() => {
      setLoading(false);
    });
  }, [orderId]);

  const confirm = () => {
    window.location.assign('/order-result');
  };

  const cancel = () => {
    window.location.assign('/book-court');
  };

  return (
    <Spin size="large" spinning={loading}>
      <div className="order-confirmation-layout">
        {order && (
          <>
            <Space direction="vertical" size="large">
              <OrderDetail order={order} />
              <PaymentDetail
                originalAmount={order.originalAmount}
                timeDiscount={order.timeDiscount}
                couponDiscount={order.couponDiscount}
                amount={order.amount}
              />
            </Space>
            <Row gutter={6} className="button-container">
              <Button size="large" onClick={cancel}>取消</Button>
              <Button type="primary" size="large" onClick={confirm}>确认预定</Button>
            </Row>
          </>
        )}
      </div>
    </Spin>
  );
};

export default OrderConfirmation;
