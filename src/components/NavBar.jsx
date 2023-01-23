import drop from "../assets/angles-down-solid.svg"
import lines from "../assets/bars-solid.svg"

export default function NavBar(){
    return(
        <nav className = "nav">
            <div className = "nav--before">
                <h1 className = "nav--title">Gabe Ngu</h1>
                <img src={drop} className = "drop"/>
                <img src={lines} className = "lines"/>
            </div>
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