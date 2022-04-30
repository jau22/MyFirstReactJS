import React from 'react';


export default class LoginForm extends React.Component{
    //render defines how things look like.
    render(){
        return <div className='container'>
            <div className="form">
                <h3>Log In </h3>
                <form>
                    <label for ="username"> Username:</label><br></br>
                    <input type="text" id="username"></input> <br></br>
                    <label for ="password"> Password:</label><br></br>
                    <input type="password" id="password"></input> <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    }
}