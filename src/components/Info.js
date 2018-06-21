import React from "react";

class Info extends React.Component {
    
    render(){
        return(
            <div className="info">
            <p className="info__item info__item--conditions" id="conditions"/>
            <p className="info__item info__item--credits" >
                <a href="#" id="credit-user"/>
                <span>on</span>
                <a href="#" id="credit-platform">React3</a>
                </p>
            </div>

        );
        
    }

}

export default Info;