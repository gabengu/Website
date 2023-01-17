import './style.css'
import NavBar from "./components/NavBar"
import Content from './components/Content'

export default function App(){
    return(
        <div className = "app">
            <NavBar />
            <Content />
        </div>   
    )
}