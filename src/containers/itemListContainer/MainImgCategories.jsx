import React from 'react'
import imgs from '../../listImgs'

const MainImgCategories = ({ imgCategory }) => {
    const image = imgs.filter((img) => img.idCategory === imgCategory)

    return (
        <>
            {image.length > 0 && (
                <div>
                    <img
                        src={image[0].img}
                        alt="categories"
                        style={{
                            width: '100%',
                            height: '350px',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default MainImgCategories
