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
                    <h1>Github</h1>
                    <h1>poop</h1>
                    <h1>poop</h1>
                </div>
            </div>
        </nav>
    )
}