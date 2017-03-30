import React  from 'react';

class SelectBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flash : 0
        }
    }
    add(index, item){
        this.props.onAddLikeItem(index,item);
    }
    shake(event){
        event.stopPropagation();
        let flashNow = this.state.flash;
        if(flashNow === 18){
            this.setState({
                flash : 0
            });
        }else{
            this.setState({
                flash : flashNow + 9
            });
        }
    }
    render(){
        return(
            <div className= "mt10">
                <h2 className="clr">
                    <span onClick = {event=>{this.shake(event)}}>Shake Shake</span>
                    Choose Categories
                </h2>
                <ul className = "feed-list clr">
                    {
                        this.props.selectList.slice(this.state.flash, this.state.flash + 9).map((item,index)=>{
                            return (

                                <li key = {index} style = {{position:'relative'}}>
                                    {
                                        !this.props.likedMap.hasOwnProperty(this.state.flash+index)?
                                        <span onClick = {this.add.bind(this,this.state.flash+index,item)}> {item}</span>
                                        :
                                        <span className  ="disable"> {item}</span>
                                    }              
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
} 

export default SelectBlock;