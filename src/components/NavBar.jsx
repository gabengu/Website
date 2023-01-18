import image from "../assets/angles-down-solid.svg"

export default function NavBar(){
    return(
        <nav className = "nav">
            <h1 className = "nav--title">Gabe Ngu</h1>
            <img src={image} className = "drop"/>
        </nav>
    )
}