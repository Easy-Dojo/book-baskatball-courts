import React, { MouseEventHandler } from 'react';
import RightCourtDisabled from '../../../../assets/RightCourtDisabled';
import RightCourtSelected from '../../../../assets/RightCourtSelected';
import RightCourtAvailable from '../../../../assets/RightCourtAvailable';
import { useBookCourtsActions } from '../../useBookCourtsActions';

interface RightCourtProps {
  value: string,
  disabled: boolean
  selected: boolean
}

const RightCourt: React.FC<RightCourtProps> = ({ disabled, value, selected }) => {
  const { changeSubCourtSelect } = useBookCourtsActions();

  const onClick:MouseEventHandler = () => {
    changeSubCourtSelect(value);
  };

  if (disabled) {
    return <RightCourtDisabled />;
  }
  return (
    <div role="button" onClick={onClick}>
      {selected ? <RightCourtSelected /> : <RightCourtAvailable />}
    </div>
  );
};

export default RightCourt;
