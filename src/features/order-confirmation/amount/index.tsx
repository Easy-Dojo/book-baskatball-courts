import React from "react";
import './index.less';

interface AmountProp {
    amount: number
}

const Amount: React.FC<AmountProp> = ({amount}) => {
    return (
        <div className="amount-layout">
            <h3>应付金额</h3>
            <h1 className="amount-value">￥{amount.toFixed(2)}</h1>
        </div>
    )
}

export default Amount;
