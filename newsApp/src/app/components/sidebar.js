import React from "react";
import "../style/sidebar.less";


class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            newsChanels : [
                'espn', 'engadget','bbc-sport','bbc-news','hacker-news','mtv-news-uk'
            ]
        };
    }

    fetech(source){
        this.props.fetchContents(source);
        this.props.changeSideBar();
    }

    getNewsList (){
        return this.state.newsChanels.map((newsChanel,index)=>{
            return (
                <li key = {index}>
                    <a onClick = {this.fetech.bind(this,newsChanel)}>{newsChanel}</a>
                </li>
            );
        });
    }

    render(){
        let style = this.props.sideBarState ? 
                    {
                        opacity: 1,
                        zIndex: 99,
                    }:
                    {
                        opacity: 0,
                        zIndex: -1
                    };

        return (
            <div className = "side-bar" style = {style}>
                <nav>
                    {this.getNewsList()}
                </nav>
                
            </div>
        );
    }
}

export default SideBar;