import React from "react";

class Photo extends React.Component {
    constructor(props) {
        super();
    }
    //this.props.bgc
    render(){
        return ( 
            <figure className="photo" id="photo" style={{backgroundColor: `${this.props.bgc}`}}>
                <img className="photo" src={this.props.full}/>
            </figure>
        );
    }

}



export default Photo;