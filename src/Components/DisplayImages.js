import React from 'react'
import classes from "./DisplayImages.module.css"
import SingleImage from "./SingleImage"

const DisplayImages = ({images,imageCategory}) => {
    console.log(images)
    
    
   
    return (
        <div className={classes["images-container"]}>
            <h2>{imageCategory} Images</h2>
            <div className={classes.images}>
                {images.map((image) => {
                    return <SingleImage image={image} />
                }) }
                
            </div>
        </div>
    )
}

export default DisplayImages
