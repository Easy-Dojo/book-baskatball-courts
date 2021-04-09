import {HttpClient} from "../../app/http/http-client";
import {COURT_SUB_TYPE} from "../book-court/service";

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
        return await this.instance.get(`/api/orders/${orderId}`).then((res) => res.data);
    }
}

export default new OrderConfirmationService();
