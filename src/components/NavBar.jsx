import image from "../assets/angles-down-solid.svg"

export default function NavBar(){
    return(
        <nav>
            <h1 className = "nav--title">Gabe Ngu</h1>
            <input type = "image" src = {image} className = "drop"/>
        </nav>
    )
}