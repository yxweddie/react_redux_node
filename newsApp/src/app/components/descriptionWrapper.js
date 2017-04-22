import React from 'react';
import "../style/description.less";
class DescriptionWrapper extends React.Component{
    constructor(props){
        super(props);
    }

    getSubNews(){
        return this.props.articles.map((article,index)=>{
            return (
                <div key = {index}  className = "col-md-12 col-xs-12 description">
                        <img className = "col-md-12 col-sm-12 col-xs-12 img-responsive" src= {article.urlToImage} />
                        <h3 className = "col-md-12 col-sm-12 col-xs-12 ">{article.title}</h3>
                        <div className = "col-md-8 col-sm-8 col-xs-8 pull-left text-left">
                            <title>Abstract</title>
                            <p>{article.description}</p>
                        </div>
                        <div className = "col-md-4 col-sm-4 col-xs-4 pull-right text-right">
                            <title>Publish Time</title>
                            <p >
                                {
                                article.publishedAt ? 
                                ((((article.publishedAt).split("T"))[1]))
                                : 
                                "no spcificed"
                                }
                            </p>
                            <a href={article.url} className=" btn btn-info" role="button">READ MORE</a>
                        </div>
                        
                </div>
            );
        });
    }

    render(){
        return (
            <div>
                {this.getSubNews()}
            </div>

        );
    }
}

export default DescriptionWrapper;