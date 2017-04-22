import React from 'react';
import ReactSwipe from 'react-swipe';

import DescriptionWrapper from './descriptionWrapper.js';
import "../style/home.less";
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        // get resource
        this.props.fetchContents('bbc-news');
        //console.log(this.getImages());
    }

    getImages(){
        if (this.props.contents){
            if(this.props.contents.articles){
                return this.props.contents.articles.map(function(c,i){
                    return (
                        <img key = {i} src = {c.urlToImage}/>
                    );
                });
            }
            
        }
        return new Array(); 
    }
    next() {
        this.refs.reactSwipe.next();
    }

    prev() {
        this.refs.reactSwipe.prev();
    }

    render(){
        let images = this.getImages();
        return (
            <div className = "home">
                <div className = "swipe-window row" >
                    <div className= "col-md-12 col-sm-12">
                        <ReactSwipe ref="reactSwipe" key={images.length} swipeOptions={
                            {continuous: true, auto : 3000, speed : 300, disableScroll : false ,stopPropagation: false}
                            }>
                            {images}
                        </ReactSwipe>
                    </div>
                </div>

                <div className = "row line-break">
                    <div className= "col-md-2 col-sm-2 col-xs-2 ">
                        <button className = " btn btn-default pull-left" type="button" onClick={this.prev.bind(this)}>
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className= "col-md-8 col-sm-8 col-xs-8 text-center line-break-title">
                        <span>{this.props.contents.currentChanel}</span>
                    </div>
                    
                    <div className= "col-md-2 col-sm-2 col-xs-2 ">
                        <button className = "btn btn-default pull-right" type="button" onClick={this.next.bind(this)}>
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>

                <div className = "row" >
                    {
                        this.props.contents && this.props.contents.articles ?
                        <DescriptionWrapper articles = {this.props.contents.articles}/>
                        :
                        <p>loading now .... </p>
                    }
                    
                </div>
            </div>
        );
    }
}

export default Home;