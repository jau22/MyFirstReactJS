import NavigationBar from "./navigation";
import LoginForm from "./loginform";
import React from "react";

export default class Home extends React.Component{
    render(){
        return (
            <div className="main">
            <NavigationBar/>
            <LoginForm/>
            </div>
        )
    }
}