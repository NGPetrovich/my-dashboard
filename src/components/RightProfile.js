import React from 'react';
import './css/dashboard.css'

const RightProfile = props => {

    function clickMe() {
        alert("clickMe() function is working");
    }

    return (
        <div>
            <div className="flexbox-item">
                <div>
                    <h5>Upcoming Reservation Details</h5>
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
                <div className='flexbox-container-buttons'>
                    <button className='button' onClick={clickMe}>
                        Add new
                    </button>
                    <button className='button' onClick={clickMe}>
                        Modify
                    </button>
                    <button className='button' onClick={clickMe}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightProfile;