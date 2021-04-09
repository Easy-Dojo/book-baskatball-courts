import { HttpClient } from '../../app/http/http-client';
import { COURT_SUB_TYPE } from '../book-court/service';

export interface Order {
  orderId: string,
  coupon: string,
  originalAmount: number,
  timeDiscount: number,
  couponDiscount: number,
  amount: number,
  courts: {
    court: string,
    subCourt: COURT_SUB_TYPE | null,
    periodHour: number,
    amount: number,
  }[]
}

class OrderConfirmationService extends HttpClient {
  async queryOrder(orderId: string): Promise<Order> {
    return this.instance.get(`/api/orders/${orderId}`).then((res) => res.data);
  }

  async updateOrderCoupon(orderId:string, coupon:string):Promise<Order> {
    return this.instance.put(`/api/orders/${orderId}/coupon`, { coupon }).then((res) => res.data);
  }

  async confirmOrder(orderId: string) : Promise<void> {
    return this.instance.post(`/api/orders/${orderId}/confirm`, null);
  }
}

export default new OrderConfirmationService();
