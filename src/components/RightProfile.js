import React from 'react';
import axios from 'axios';
import './css/dashboard.css'
import DataParser from './DataParser';

class RightProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservationData: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:3001/reservation")
            .then(response => {
                this.setState({ reservationData: response.data })
            })
    }

    clickMe = () => {
        alert("clickMe() function is working");
    }

    render() {
        return (
            <div>
                <div className="flexbox-item">
                    <div>
                        <h5>Most Recent Reservation Details:</h5>
                    </div>
                    <div>
                        {this.state.reservationData.map(item => <DataParser key={item.id} contentData={item}/>)}
                    </div>
                    <div className='flexbox-container-buttons'>
                        <button className='button' onClick={this.clickMe}>
                            Add new
                        </button>
                        <button className='button' onClick={this.clickMe}>
                            Modify
                        </button>
                        <button className='button' onClick={this.clickMe}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default RightProfile;