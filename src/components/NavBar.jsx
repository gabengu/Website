import image from "../assets/angles-down-solid.svg"

export default function NavBar(){
    return(
        <nav className = "nav">
            <div className = "nav--before">
                <h1 className = "nav--title">Gabe Ngu</h1>
                <img src={image} className = "drop"/>
            </div>
            <div className = "links--container">
                <div className = "links">
                    <span className = "link--text">Github</span>
                    <span className = "link--text">Email</span>
                    <span className = "link--text">LinkedIn</span>
                </div>
            </div>
        </nav>
    )
}