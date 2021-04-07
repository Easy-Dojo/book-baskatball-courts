import React, {useRef} from "react";
import {Button, Input, Row} from "antd";
import './index.less';

interface CouponProp {
    callback(coupon: string): void
}

const Coupon: React.FC<CouponProp> = ({callback}) => {
    const inputRef = useRef<any>(null);
    return (
        <Row>
            <Input className='coupon-input' ref={inputRef}/>
            <Button type="primary" onClick={() => {
                callback(inputRef.current.state.value)
            }}>验证</Button>
        </Row>
    )
}

export default Coupon;