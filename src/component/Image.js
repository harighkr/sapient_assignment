import React from 'react';


const Image = ({ images, classname }) => {
    return (
        <img className={classname} src={`${images[0].base_url}${images[0].primary}`} />
    )
}

export default Image;

