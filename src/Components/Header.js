import React from 'react'
import classes from "./Header.module.css"

const Header = () => {
    return (
        <div id="top" className={classes.header}>
            <p className={classes["built-by"]}>
                <a href="kevinmisati.netlify.app">Kevin</a>
            </p>
            <h1>SnapPhotos</h1>
        </div>
    )
}

export default Header
