import React from "react"
import "../styles/main.css"
import {Link} from "react-router-dom"

function HomeButton() {
    return (
        <>
         <p id="homeButton">
             <Link to="/skb">s k b</Link></p>
        </>
    )
}

export default HomeButton