import React from "react";
import "../style/navbar.less";

// side bar menu
// console
// refresh button
class NavBar extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    changeSideBar(){
        this.props.changeSideBar();
    }
    refresh(){
        this.props.refresh();
        this.props.fetchContents(this.props.contents.currentChanel.toLowerCase());
    }
    render(){
        return (
            <div className = "row nav-bar ">

                <div className = "col-md-2 col-sm-2 col-xs-2">
                    <button className = "btn btn-default pull-left" onClick = {this.changeSideBar.bind(this)} > <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span> </button>
                </div>
                <div className = "col-md-8 col-sm-8 col-xs-8 text-center">
                    <p className = "lead">Live News</p>
                </div>
                <div className = "col-md-2 col-sm-2 col-xs-2">
                    <button className = "btn btn-default pull-right" onClick= {this.refresh.bind(this)}> <span className="glyphicon glyphicon-refresh float-right" aria-hidden="true"></span> </button>
                </div>

            </div>    
        );
    }
}

export default NavBar;