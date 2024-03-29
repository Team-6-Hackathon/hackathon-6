import React, { Component } from 'react';


class SingleShowing extends Component {
    state = {
        active:false
    }
    render() {
        return (
            <div className='showing-card'>

                <div className='image-section'>
                    <img src={this.props.image} alt='house'/>
                </div>

                <div className='text-section'>
                    <div className='card-heading'>
                        { this.state.active ? 
                        <img src='/active.svg' alt='favorite' onClick={() => this.setState({active:!this.state.active})}/>
                        :
                        <img src='/s.svg' alt='blank heart' onClick={() => this.setState({active:!this.state.active})}/>
                        }
                    </div>

                    <div className='card-name'>
                        <p style={{color: '#767676'}}> Entire Apartment </p>
                    </div>

                    <div className='card-text'>
                        <p> {this.props.name} </p>
                        <p> {this.props.size}</p>
                        <p> WiFi Kitchen </p>
                    </div>

                    <div className='card-footer'>
                        <h4> <img src='star.svg' alt='star'/> {this.props.rating} </h4>
                        <h4> {this.props.price}</h4>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SingleShowing;