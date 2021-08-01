import React, { useEffect, useState } from 'react'
import { getSearchedImages, getTrendingImages } from '../api/api'
import Image from './Image'
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';

const modalStyle = {
    content: {
        border: "none",
        padding: "none",
        overflow: "none",
        background:"none"
    }
}

const Gallery = ({ query }) => {
    const [imgList, setimgList] = useState([])
    const [currentImg, setcurrentImg] = useState(null)
    useEffect(() => {
        getTrendingImages().then((data) => {
            setimgList(data)
        })
    }, []);

    useEffect(async () => {
        if (query.trim() === '') {
            return;
        }
        const data = await getSearchedImages(query);
        setimgList(data);
    }, [query])     
    Modal.setAppElement('#root')
    return (
        <div>
            <Modal style={modalStyle} isOpen={!!currentImg} onRequestClose={() => setcurrentImg(null)}>
                <img className='imgPreview' src={currentImg} alt="Image Preview" />
            </Modal>
            {
                imgList.length === 0 ? <h2>No Image Found to Your Search</h2> : null
            }

            <Masonry className="grid-container" options={{ isFitWidth: true }}>
                {
                    imgList.map(img => {
                        return <Image urls={img.urls} handleClick={setcurrentImg} key={img.id} />
                    })
                }
            </Masonry>
        </div>
    )
}

export default Gallery
