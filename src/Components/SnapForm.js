import React,{useState,useEffect} from 'react'
import SearchIcon from "./SearchIcon"
import classes from "./SnapForm.module.css"


const SnapForm = ({ getCategoryQuery }) => {

    const [userInput,setUserInput] = useState("")

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getCategoryQuery(userInput)
    }
    return (
        <>
            <form  onSubmit={handleSubmit} className={classes.form}>
            <input placeholder="food" onChange={handleInputChange} value={userInput} type="text" />
            <button >
                    <SearchIcon />
                   
                </button>
            </form>
         </>
    )
}

export default SnapForm
