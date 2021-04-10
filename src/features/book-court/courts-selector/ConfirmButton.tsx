import { Button, Form } from 'antd';
import React from 'react';

interface ConfirmButtonProps {
  onSubmit: React.MouseEventHandler<HTMLElement>;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onSubmit }) => (
  <Form.Item>
    <Button size="large" type="primary" block onClick={onSubmit}>
      确认场地
    </Button>
  </Form.Item>
);

export default ConfirmButton;
