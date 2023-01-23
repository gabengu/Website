import headshot from "..//assets/image.png"

export default function Content(){
    return(
        <div className = "content">
            <img src = {headshot} className = "headshot"/>
            <h1 className = "content--title">Hi!</h1>
            <p className = "content--about">
                My name is Mark Ngu, but I prefer to go by Gabe.<br></br> I am currently enrolled in Software
                Engineering @UofC!
                Hobbies of mine include programming, basketball and games.
                I'm always open to opportunities to connect so feel free to reach out
                to me!
            </p>
        </div>
    )
}