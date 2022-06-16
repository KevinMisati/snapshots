import React,{useState} from 'react'
import classes from "./DisplayImages.module.css"
import SingleImage from "./SingleImage"

const DisplayImages = ({query,imgs,isLoading,addPage}) => {
    const handleLoading = () => {
        addPage()
    }
    return (
        <div className={classes["images-container"]}>
            <h2>{query} Images</h2>
            {isLoading &&
                <div className={classes['loading']}>
                    <h4>Loading...</h4>
                </div>
            }
            <div className={classes.images}>
                {imgs.map((image) => {
                    return <SingleImage image={image.src.large} />
                }) } 
                
            </div>

            {!isLoading ?
                <div className={classes['load-more']}>
                    <button onClick= {handleLoading}>Load more photos</button>
                </div> : 
                <div className={classes['loading']}>
                    <h4>Loading...</h4>
                </div>
            }

        </div>
    )
}

export default DisplayImages
