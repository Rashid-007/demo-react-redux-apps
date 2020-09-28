import React from 'react';

import ImageCard from './image-card';
import './itemList.css';

const ItemList = (props) => {
    const { images } = props;
    const displayImages = images.map(image => {
        return <ImageCard image={image} key={image.id} />
    });

    return (
        <div className="item-list">
            {displayImages}
        </div>
    )
}

export default ItemList;