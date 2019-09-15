import React, { Component } from "react";
import "./style.css";
import Logo from "./images/logo.png";



class TitleBar extends Component {
    state = {
        score: 0,
        topScore: 0,
        message: "Click an Image to Begin!"
    }
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="titleBar">
                <div className="row">
                    <div className="col-4">
                        <div className="gameTitle">
                            <p><img src={Logo} className="logoImage" alt="Naruto"></img> Memory Game</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="status">
                            <p>{this.state.message}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="scoreStats">
                            <p>Score : {this.state.score} | Top Score : {this.state.topScore}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default TitleBar;



