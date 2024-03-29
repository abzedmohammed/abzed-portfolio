import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export default function Nav() {
    const [listView, setListView] = useState(false)
    const navigate = useNavigate()

    function handleListView(){
        setListView(listView => !listView)
    }

    function showHomePage(){
        navigate("/")
        window.location.reload()
    }
    
    return(
        <>
        <button onClick={handleListView} type="button" className="mobile-nav-toggle d-xl-none"><i id="view" className={listView? "bi bi-x mobile-nav-toggle" : "bi bi-list mobile-nav-toggle"}></i></button>
        <header id="header" className={listView ? "d-flex flex-column justify-content-center header-show" : "d-flex flex-column justify-content-center"}>
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a onClick={showHomePage} className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><NavLink to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></NavLink></li>
                    <li><NavLink to="/articles" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Articles</span></NavLink></li>
                    <li><NavLink to="/web-applications" className="nav-link scrollto"><i className="bx bx-code"></i> <span>Web Development</span></NavLink></li>
                    <li><NavLink to="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}