import { Empty, notification, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { selectCourts } from '../courtsSlice';
import ConfirmButton from './ConfirmButton';
import CourtContent from './CourtContent';
import courtsService from '../service';

const CourtSelectionBoard: React.FC = () => {
  const history = useHistory();
  const { data, loading, error } = useTypedSelector(selectCourts);
  const [selectedCourts, setSelectedCourts] = useState<Array<CheckboxValueType>>([]);

  const onSelectionChange = (checkedValue: Array<CheckboxValueType>) => {
    setSelectedCourts(checkedValue);
  };

  const onSubmit = async () => {
    if (data) {
      const { date, startTime, endTime } = data;
      const params = {
        date,
        startTime,
        endTime,
        selectedCourts,
      };
      const { orderId } = await courtsService.bookCourts(params).catch((err) => {
        notification.error({
          message: '定场失败',
          description: err.message,
        });
      });

      history.push(`/order-confirmation/${orderId}`);
    }
  };

  useEffect(() => {
    if (error) {
      notification.error({
        message: '查询时间错误',
        description: error,
      });
    }
  }, [error]);

  return (
    <Spin spinning={loading}>
      {
            data
              ? (
                <>
                  <CourtContent courts={data.courts} onChange={onSelectionChange} />
                  <ConfirmButton onSubmit={onSubmit} />
                </>
              )
              : <Empty />
        }
    </Spin>
  );
};

export default CourtSelectionBoard;
