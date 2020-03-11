import React, { useState } from 'react'

export default function Main(props) {
 
    const [mainState, setMainState] = useState(props)

    if (mainState === 'comedy'){
        return (
               <div>I only want to show this when Comedy is clicked...what is it? Comedy?</div>
        )  
    }
    if (mainState === 'programming'){
        return (
                <div>I only want to show this when ... Program? is licked</div>  
        )
    }
    if (mainState === 'writing'){
        return (
            <div>I only show this when it's clicked.. what is it?... Write?</div>  
        )
    }
    else 
        return <div> Click a button! THis is what it looks like before any buttons are pressed</div>

}