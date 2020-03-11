import React, { useState } from 'react'

export default function NavBar(props) {

    const [navBarProps, setNavBarProps] = useState(props)



    return (
        <div>
            <h1>I'm the Menu! MWAHAHA LOOK AT ME I'M THE MENU!</h1>
            <button onClick={() => setNavBarProps('comedy')}>Click me! I'm the COMEDY BUTTON</button>
            <button onClick={() => setNavBarProps('programming')}>Click me! I'm the bEst!</button>
            <button onClick={() => setNavBarProps('writing')}>Click whats the last one? Writing?</button>

        </div>
    )

}