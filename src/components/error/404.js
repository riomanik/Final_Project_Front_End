import React from "react";
import "./404.css"
import { Link } from "react-router-dom";

class Error404 extends React.Component {
    render() {
        return (
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>4<span></span>4</h1>
                    </div>
                    <h2>Oops! Page Not Be Found</h2>
                    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                    <Link to="/"> Back to homepage</Link>
                </div>
            </div>
        )
    }
}

export default Error404;