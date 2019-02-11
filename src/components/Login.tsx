import * as React from "react";

class Login extends React.Component<any, any>{
    
    constructor(props: any){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    login(){
        alert('Yay');
    }

    public render(){
        return (
            <div>
                <div className="form-group">
                    <input type="email" placeholder="EMAIL"></input>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="PASSWORD"></input>
                </div>
                <div className="form-group">
                    <button onClick={event => this.login()}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;