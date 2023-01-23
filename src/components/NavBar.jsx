import drop from "../assets/angles-down-solid.svg"
import lines from "../assets/bars-solid.svg"
import NavMobile from "./NavMobile"
import { useState } from "react"

export default function NavBar(){
    const [navOpen, setNavOpen] = useState(false);
    function clickHandle(){
        setNavOpen(() => !navOpen)
    }
    return(
        <nav className = "nav">
            <div className = "nav--before">
                <h1 className = "nav--title">Gabe Ngu</h1>
                <img src={drop} className = "drop"/>
                <img src={lines} className = "lines" onClick={clickHandle}/>
            </div>
            {navOpen && <NavMobile />}
            {/* for desktop */}
            <div className = "links--container">
                <div className = "links">
                    <a className = "link--text" href="https://github.com/gabengu" target="_blank">Github</a>
                    <a className = "link--text" href="#">Email</a>
                    <a className = "link--text" href="#">LinkedIn</a>
                </div>
            </div>
        </nav>
    )
}