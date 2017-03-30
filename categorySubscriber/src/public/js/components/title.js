import React  from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "header">
                <ul>
                    {/*<li><a href="#">News</a></li>*/}
                    <li >
                        <a className = "active" href="#">Subscribe</a>
                    </li>

                </ul>
            </div>
        );
    }
} 

export default Header;