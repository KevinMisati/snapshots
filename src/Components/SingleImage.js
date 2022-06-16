import React from 'react'
import classes from "./SingleImage.module.css"

const SingleImage = ({ image }) => {
    
    return (
        <div className={classes["single-image"]}>
            
            <img src={image} alt=""/>
        </div>
    )
}

export default SingleImage
