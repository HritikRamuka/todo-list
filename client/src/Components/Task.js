import React, { PureComponent } from 'react';

export default class Task extends PureComponent {
    onClickHandler = () => {
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <ul className='task'>
                {this.props.item}<button onClick={this.onClickHandler} className='d-button'>Delete</button>
            </ul>
        )
    }
}