import React from 'react';
import './css/dashboard.css';

const LeftProfile = () => {
    return (
        <div>
            <div className='flexbox-item-blank'>
                <div>
                    <button className='button'>upload image</button>
                </div>
                <div className='flexbox-item-1'>
                    <h2>Markus Jansen</h2>
                </div>
                <div>
                    <h5 className='h5'>Role:</h5>
                    <input
                        className='input'
                        placeholder="Software Developer"
                    />
                </div>
                <div>
                    <h5 className='h5'>Email:</h5>
                    <input
                        className='input'
                        placeholder="markus.jansen@mediconsult.fi"
                    />
                </div>
                <div>
                    <h5 className='h5'>City:</h5>
                    <input
                        className='input'
                        placeholder="turku"
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftProfile;