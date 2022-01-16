import React from 'react'
import classes from "./SingleImage.module.css"

const SingleImage = ({ image }) => {
    const { farm, server, id, secret } = image;
    const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    
    return (
        <div className={classes["single-image"]}>
            
            <img src={src} alt=""/>
        </div>
    )
}

export default SingleImage
