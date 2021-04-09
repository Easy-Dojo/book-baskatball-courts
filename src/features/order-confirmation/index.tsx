import React, { useEffect, useState } from 'react';
import {
  Button, Col, Row, Space, Spin,
} from 'antd';
import OrderDetail from './order-detail';
import orderConfirmationService from './service';
import './index.less';
import PaymentDetail from './payment-detail';

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
            <Row gutter={6}>
              <Col span={12}>
                <Button block size="large">取消</Button>
              </Col>
              <Col span={12}>
                <Button block type="primary" size="large" onClick={confirm}>确认预定</Button>
              </Col>
            </Row>
          </>
        )}
      </div>
    </Spin>
  );
};

export default OrderConfirmation;
