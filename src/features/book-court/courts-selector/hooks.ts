import { useEffect } from 'react';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { selectCourts } from '../courtsSlice';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';

export const useHandleActionResult = () => {
  const history = useHistory();
  const bookCourtsState = useTypedSelector(selectCourts);

  useEffect(() => {
    if (bookCourtsState.queryCourtsError) {
      notification.error({
        message: '查询时间错误',
        description: bookCourtsState.queryCourtsError,
      });
    }
    if (bookCourtsState.bookCourtsError) {
      notification.error({
        message: '定场失败',
        description: bookCourtsState.bookCourtsError,
      });
    }

    if (bookCourtsState.bookCourtsOrder) {
      notification.success({
        message: '下单成功',
      });
      history.push(`/order-confirmation/${bookCourtsState.bookCourtsOrder.orderId}`);
    }
  }, [bookCourtsState, history]);

  return null;
};
