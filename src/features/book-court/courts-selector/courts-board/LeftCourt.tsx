import React, { MouseEventHandler } from 'react';
import LeftCourtDisabled from '../../../../assets/LeftCourtDisabled';
import LeftCourtSelected from '../../../../assets/LeftCourtSelected';
import LeftCourtAvailable from '../../../../assets/LeftCourtAvailable';
import { useBookCourtsActions } from '../../useBookCourtsActions';

interface LeftCourtProps {
  value: string,
  disabled: boolean,
  selected: boolean
}

const LeftCourt: React.FC<LeftCourtProps> = ({ disabled, value, selected }) => {
  const { changeSubCourtSelect } = useBookCourtsActions();

  const onClick:MouseEventHandler = () => {
    changeSubCourtSelect(value);
  };

  if (disabled) {
    return <LeftCourtDisabled />;
  }
  return (
    <div role="button" onClick={onClick}>
      {selected ? <LeftCourtSelected /> : <LeftCourtAvailable />}
    </div>
  );
};

export default LeftCourt;
