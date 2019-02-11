import * as React from "react";

class Home extends React.Component{
    
    public render(){
        return (
            <div>
                <div className="form-group">
                    <input type="text" placeholder="FROM"></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="TO"></input>
                </div>
                <div className="form-group">
                    <button>Search</button>
                </div>
            </div>
        );
    }
}

export default Home;