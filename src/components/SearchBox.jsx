import React, {useState} from 'react'
import { DebounceInput } from 'react-debounce-input'
import './style.css'

const SearchBox = ({input, setinput}) => {
    return (
        <>
        <h1 className="title">PicApp | Tapesh</h1>
            <DebounceInput 
                type="text" 
                name="Photo Search" 
                placeholder="Search Here..." 
                className="inputBox" 
                value={input} 
                onChange={(e)=> setinput(e.target.value)}
                minLength={3}
                debounceTimeout={300}
            />
        </>
    )
}

export default SearchBox