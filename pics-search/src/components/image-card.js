import React from 'react';

import './itemList.css';
import { render } from '@testing-library/react';
class ImageCard extends React.Component {
    imageRef = React.createRef();
    state = {spans: 0}
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan)
    }
    // Since callback is involved the scope of this get lost. 
    //To take care of that we need arrow function for call back
    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans})
    }
    render() {
        const { urls, description } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    src={urls.regular}
                    alt={description}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;