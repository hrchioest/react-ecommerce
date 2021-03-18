import React from 'react'
import imgs from '../../listImgs'

const MainImgCategories = ({ imgCategory }) => {
    const image = imgs.filter((img) => img.idCategory == imgCategory)
    console.log('img', image)

    return (
        <>
            {image.length > 0 && (
                <div>
                    <img
                        src={image[0].img}
                        alt="Imagen-categorias"
                        style={{
                            width: '100%',
                            height: '420px',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default MainImgCategories
