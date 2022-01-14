import React from 'react';
import './css/dashboard.css';
import axios from 'axios';
import DataParser from './DataParser';

class LeftProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userData: []
      };
    }
  
    componentDidMount() {
      axios
        .get("http://localhost:3001/data")
        .then(response => {
          this.setState({ userData: response.data })
        })
    }

    clickMe = () => {
        alert("clickMe() function is working");
    }

    render() {
        return (
            <div>
                <div className='flexbox-item-blank'>
                    <div>
                        <button onClick={this.clickMe} className='image-button'>upload image</button>
                    </div>
                    <div>
                        <h2>Markus Jansen</h2>
                    </div>
                    <div>
                        {this.state.userData.map(item => <DataParser key={item.id} contentData={item} />)}
                    </div>
                    <div>
                        <button onClick={this.clickMe} className='button'>Back to Main Screen</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default LeftProfile;