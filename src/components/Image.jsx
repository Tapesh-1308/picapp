import React from 'react'

const Image = ({ urls, handleClick, ...rootDOMAttributes }) => {
    return (
        <li className="img" onClick={() => handleClick(urls.regular)}
            {...rootDOMAttributes}
        >
            <img src={urls.small} alt="Picsum photo" width="250" />
        </li>
    )
}

export default Image;
