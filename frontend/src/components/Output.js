import React, {Component} from 'react';

class Output extends Component {

  render() {
    const {percentage,username} = this.props;
    return (
      <div style={{padding:20}}>
        <div className="row">
            <div className="card red accent-1 darken-1">
              <div className="card-content white-text">
                <span className="card-title">Hi {username}!</span>
                <p>Probability of taking a waist disc<strong>{percentage}</strong></p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Output