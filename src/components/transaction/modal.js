import React from 'react';
import './modal.css';
import WindMillLoading from 'react-loadingg/lib/WindMillLoading';

class modalTopUp extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.visible ? <WindMillLoading />
                    : null}
            </React.Fragment>
        )
    }
}

export default modalTopUp;