import React from 'react';
import './css/dashboard.css';

const LeftProfile = () => {

    function clickMe() {
        alert("clickMe() function is working");
    }

    return (
        <div>
            <div className='flexbox-item-blank'>
                <div>
                    <button onClick={clickMe} className='image-button'>upload image</button>
                </div>
                <div>
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
                        placeholder="Turku"
                    />
                </div>
                <div>
                    <button onClick={clickMe} className='button'>Back to Main Screen</button>
                </div>
            </div>
        </div>
    )
}

export default LeftProfile;