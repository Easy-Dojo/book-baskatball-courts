import React from 'react';
import { COURT_SUB_TYPE } from '../../../book-court/service';
import './index.less';

interface Props {
  court: string,
  subCourt: COURT_SUB_TYPE | null,
  hours: number,
  amount: number,
}

const OrderItem: React.FC<Props> = ({
  court, subCourt, hours, amount,
}: Props) => (
  <tr className="order-item-row">
    <td>
      场地
      {court}
    </td>
    <td>
      类型：
      {subCourt === null ? '全场' : '半场'}
    </td>
    <td>
      时长：
      {hours}
      小时
    </td>
    <td>
      ￥
      {amount.toFixed(2)}
    </td>
  </tr>
);

export default OrderItem;
