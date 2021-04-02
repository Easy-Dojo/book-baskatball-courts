import {Carousel} from "antd";
import React from "react";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
    textAlign: 'center' as const
};

const Header: React.FC = () => {
    return <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
}

export default Header