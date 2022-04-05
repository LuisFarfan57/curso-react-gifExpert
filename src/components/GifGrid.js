import React from 'react'
import GifGridItem from './GifGridItem'
import { useFetchGif } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGif(category)

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='card-grid'>
                {/* Para mandar de una vez desestructurado la imagen */}
                {images.map((img) => <GifGridItem key={img.id} {...img} />)}
            </div>
        </>
    )
}

export default GifGrid