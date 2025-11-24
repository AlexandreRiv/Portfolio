import { useState } from 'react'

function Nav() {
    const [count, setCount] = useState(0)

    return (
        <div className="nav-container flex item-center justify-center h-100 bg-fuchsia-800 text-white" >
            <nav>
                <h1 className={"text-4xl"}> SUIII </h1>
            </nav>
        </div>

    )
}

export default Nav;