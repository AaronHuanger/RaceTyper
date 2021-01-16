import React, {Component } from "react";
import { AppBar, Toolbar, Button} from '@material-ui/core';

class HomePage extends Component {
    render() {
        return(
            <div className="container-fluid HomePageMain">
                <div className = "row">
                    <div className = "col-8"> 
                        <div className = "row" style = {{paddingBottom:"2em"}}>
                            <h5> Banner thing to Show Style</h5>
                        </div>
                        <div className = "row">
                            <div className = "col">
                                <Button color= "primary" variant ="contained"> Classic Mode</Button>
                            </div>
                            <div className = "col">
                                <Button color= "secondary" variant ="contained"> Deathmatch</Button>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col">
                                <Button color= "default" variant ="contained"> Lenient Mode</Button>
                            </div>
                            <div className = "col">
                                <Button color= "inherit" variant ="contained"> Timed Mode</Button>
                            </div>
                        </div>
                    </div> 
                    <div className = "col-4">
                        <h1>Options goes here</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;