import React from "react";

export default class NavigationBar extends React.Component{
    render(){
        return <div className="navigationBar">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Log In</a>
        </div>
    }
}