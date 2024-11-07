import React from 'react';

const Test1 = ({props, sum}) => {
    const strSum = (str1, str2) => {
        return str1 + str2;
    };
    return (
        <div>
            <div>{props}</div>
            <div>{sum(1, 2)}</div>
            <div>{strSum(props, props)}</div>
        </div>
    );
}

export default Test1;