import React from "react";


class Search extends React.Component {
     
    
     constructor(props){
         super();
         this.changeHandler=this.changeHandler.bind(this);
         this.submitHandler=this.submitHandler.bind(this);
         this.state={text:""};
     }

     
     changeHandler(event){
         this.setState({text: event.target.value});
     }

     submitHandler(event){
         event.preventDefault();
        const {unsplash, weather}=this.props.config.api;
        let city=this.state.text;
        const that=this;
        
        fetch(
            `${weather.url}?q=${city}&APPID=${weather.apiKey}`
          )
            .then(function(response) {
              return response.json();
            })
            .then(function(jsonData){

                fetch(
                    `${unsplash.url}?query=${jsonData.weather[0].description}+${city}&client_id=${unsplash.apiKey}`
                  )
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(data){
                      that.props.receiver(data.results.map(item=> item));
        
                    }).catch(function(error) {
                        alert("Sorry, I couldn't find that");
                      });


            }).catch(function(error) {
                alert("Sorry, I couldn't find that");
              });
            
     

     }

    
    render(){
       
        return(
            <div className="controls">
            <form className="search" id="search" onSubmit={this.submitHandler}>
              <label className="search__label" >City</label>
              <input className="search__input" value={this.props.value} onChange={this.changeHandler} id="search-tf" name="city" placeholder="Enter city name" autoComplete="city" />
              <button className="btn search__btn" type="submit">Go</button>
            </form>
          </div>

        );
        
    }

}

export default Search;