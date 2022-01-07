import react from 'react';
import '../index.css';

const LeftProfile = () => {
    return (
        <div className='flexbox-container'>
            <div className='flexbox-item'>
                <div>
                    <button className='button'>upload image</button>
                </div>
                <div className='flexbox-item-1'>
                    <h2>Markus Jansen</h2>
                </div>
                <div>
                    <p>Role:</p>
                    <p>Software Developer</p>
                </div>
                <div>
                    <p>Email:</p>
                    <p>markus.jansen@mediconsult.fi</p>
                </div>
                <div>
                    <p>City:</p>
                    <p>Turku</p>
                </div>
            </div>
        </div>
    )
}

export default LeftProfile;