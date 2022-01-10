import React from 'react';
import './css/dashboard.css'

const RightProfile = props => {
    return (
        <div className="flexbox-container">
            <div className="flexbox-item">
                <div className='flexbox-item-1'>
                    <h5>Upcoming Reservation details</h5>
                </div>
                <div>
                    <h5 className='h5'>City:</h5>
                    <input
                        className='input-right'
                        placeholder="Turku"
                    />
                </div>
                <div>
                    <h5 className='h5'>Building:</h5>
                    <input
                        className='input-right'
                        placeholder="Main Building"
                    />
                </div>
                <div>
                    <h5 className='h5'>Room:</h5>
                    <input
                        className='input-right'
                        placeholder="Romeo"
                    />
                </div>
                <div>
                    <h5 className='h5'>Spot:</h5>
                    <input
                        className='input-right'
                        placeholder="whole Room"
                    />
                </div>
                <div>
                    <h5 className='h5'>Date:</h5>
                    <input
                        className='input-right'
                        placeholder="10/01/2022, Monday"
                    />
                </div>
            </div>
        </div>
    );
};

export default RightProfile;