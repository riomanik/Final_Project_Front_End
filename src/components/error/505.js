import React from "react";
import "./404.css"
import { Link } from "react-router-dom";

class Error500 extends React.Component {
    render() {
        return (
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>5<span></span>0</h1>
                    </div>
                    <h2>Oops! Internal Server Error</h2>
                    <p>The server encountered an internal error or misconfiguration and was unable to complete your request</p>
                    <Link to="/"> Back to homepage</Link>
                </div>
            </div>
        )
    }
}

export default Error500;