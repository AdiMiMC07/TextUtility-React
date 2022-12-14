import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg ${props.mode==="light"?"bg-light":"bg-dark"}`} style={{backgroundColor:"rgb(10,59,1)"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color: props.mode==="light"?"#282c34":"white"}}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/" style={{color: props.mode==="light"?"#282c34":"white"}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about" style={{color: props.mode==="light"?"#282c34":"white"}}>{props.about}</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input toggleSwitch" type="checkbox" role="switch" id="BlueDark" onClick={props.togglemode}/>
                    <label className="form-check-label mx-1" htmlFor="BlueDark">Enable Blue Dark Mode</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input toggleSwitch" type="checkbox" role="switch" id="GreenDark" onClick={props.togglemode}/>
                    <label className="form-check-label mx-1" htmlFor="GreenDark">Enable Green Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string
}
Navbar.defaultProps = {
    title : "Text Utils",
    about : "About"
}