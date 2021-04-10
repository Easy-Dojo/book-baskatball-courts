import { Spin } from 'antd';
import React from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { selectCourts } from '../courtsSlice';
import ConfirmButton from './ConfirmButton';
import ContentBox from '../../../app/components/content-box';
import PickIcon from '../../../assets/PickIcon';
import Description from './Description';
import CourtsBoard from './courts-board';
import { useHandleActionResult } from './hooks';
import { useBookCourtsActions } from '../useBookCourtsActions';

const CourtSelector: React.FC = () => {
  useHandleActionResult();
  const {
    searchedCourts, selectedSubCourtIds, loading,
  } = useTypedSelector(selectCourts);
  const { bookCourts } = useBookCourtsActions();

  const onSubmit = async () => {
    if (searchedCourts && selectedSubCourtIds.length > 0) {
      const { date, startTime, endTime } = searchedCourts;
      const params = {
        date,
        startTime,
        endTime,
        selectedCourts: selectedSubCourtIds,
      };
      bookCourts(params);
    }
  };

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
