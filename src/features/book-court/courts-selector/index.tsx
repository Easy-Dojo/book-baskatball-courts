import { notification, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { selectCourts } from '../courtsSlice';
import ConfirmButton from './ConfirmButton';
import courtsService from '../service';
import ContentBox from '../../../app/components/content-box';
import PickIcon from '../../../assets/PickIcon';
import Description from './Description';
import CourtsBoard from './courts-board';

const CourtSelector: React.FC = () => {
  const history = useHistory();
  const {
    searchedCourts, selectedSubCourtIds, loading, error,
  } = useTypedSelector(selectCourts);

  const onSubmit = async () => {
    if (searchedCourts && selectedSubCourtIds.length > 0) {
      const { date, startTime, endTime } = searchedCourts;
      const params = {
        date,
        startTime,
        endTime,
        selectedCourts: selectedSubCourtIds,
      };
      const resData = await courtsService.bookCourts(params).catch((err) => {
        notification.error({
          message: '定场失败',
          description: err.message,
        });
      });

      if (resData) {
        history.push(`/order-confirmation/${resData.orderId}`);
      }
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
      <ContentBox icon={PickIcon} title="选择场地">
        <div className="court-selection-board">
          <Description />
          <CourtsBoard
            courts={searchedCourts && searchedCourts.courts}
            selectedSubCourtIds={selectedSubCourtIds}
          />
          {searchedCourts && <ConfirmButton onSubmit={onSubmit} />}
        </div>
      </ContentBox>
    </Spin>
  );
};

export default CourtSelector;
