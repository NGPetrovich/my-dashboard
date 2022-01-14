import React from 'react';
import './css/dashboard.css';

const DataParser = ({contentData}) => {
    return(
        <div>
            <div className='h5'>{contentData.h5}</div>
            <div className='content'>{contentData.content}</div>
        </div>
    )
}


export default DataParser;