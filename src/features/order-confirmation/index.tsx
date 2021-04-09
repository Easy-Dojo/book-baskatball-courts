import {
  Button, notification, Row, Space, Spin,
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
    orderConfirmationService.confirmOrder(orderId).then(() => {
      window.location.assign('/order-result');
    }).catch((error) => {
      notification.error({
        message: '预约失败',
        description: error.message,
      });
    });
  };

  const cancel = () => {
    window.location.assign('/book-court');
  };

  const checkCoupon = (newCoupon: string) => {
    setLoading(true);
    return orderConfirmationService.updateOrderCoupon(orderId, newCoupon).then((receivedOrder) => {
      setOrder(receivedOrder);
      notification.success({
        message: '优惠成功',
        description: '优惠金额已扣减',
      });
    }).catch((error) => {
      notification.error({
        message: '优惠券不可用',
        description: error.message,
      });
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <Spin size="large" spinning={loading}>
      <div className="order-confirmation-layout">
        {order && (
          <>
            <Space direction="vertical" size="large">
              <OrderDetail order={order} />
              <PaymentDetail
                coupon={order.coupon}
                checkCoupon={checkCoupon}
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
